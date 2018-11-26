import React, { Component } from "react";
import { withPrefix } from "gatsby";
import Link from "gatsby-link";
import svgRightArrow from "../images/right-arrow.svg";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const currentMonth = months[new Date().getMonth()];

export default class PostsList extends Component {
  state = {
    search: "",
    currentFilter: "all",
    allPosts: [...this.props.posts],
    exam_details: [],
    questions: [],
    blockchain: [],
    refactoring: [],
    cryptography: [],
    iot: []
  };

  filter(pages) {
    let exam_details = [];
    let questions = [];
    let blockchain = [];
    let refactoring = [];
    let cryptography = [];
    let iot = [];

    // Filter the data
    pages.map(page => {
      switch (page.node.frontmatter.tags) {
        case "exam-details":
          exam_details.push(page);
          break;
        case "questions":
          questions.push(page);
          break;
        case "blockchain":
          blockchain.push(page);
          break;
        case "cryptography":
          cryptography.push(page);
          break;
        case "refactoring":
          refactoring.push(page);
          break;
        case "iot":
          iot.push(page);
          break;
      }
    });

    this.setState({
      exam_details,
      questions,
      blockchain,
      refactoring,
      cryptography,
      iot
    });
  }

  handleFilterClick = e => {
    this.setState({
      currentFilter: e.target.dataset.filter
    });
  };

  handleSearch = e => {
    let { value } = e.target;
    let { posts } = this.props;

    const searchResults = posts.filter(post => {
      if (
        post.node.frontmatter.title
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.excerpt.toLowerCase().includes(value.toLowerCase())
      ) {
        return post;
      }
    });

    this.setState({
      search: value,
      allPosts: searchResults,
      currentFilter: "all"
    });
  };

  componentWillMount() {
    // Filter pages into categories
    this.filter(this.props.posts);
  }

  componentDidMount() {
    // Setup ESC listener
    document.addEventListener(
      "keydown",
      e => {
        e.code === "Escape"
          ? this.setState({ search: "" }, () => this.handleSearch(e))
          : null;
      },
      false
    );
  }

  render() {
    const { allPosts, currentFilter } = this.state;

    return (
      <div>
        {this.props.showCategories === "yes" && (
          <div className="category-container">
            <button
              className={`category all ${currentFilter === "all" && "active"}`}
              data-filter="all"
              onClick={this.handleFilterClick}
            >
              All posts
            </button>
            {this.state.exam_details.length > 0 && (
              <button
                className={`category exam-details ${currentFilter ===
                  "exam_details" && "active"}`}
                data-filter="exam_details"
                onClick={this.handleFilterClick}
              >
                Exam details
              </button>
            )}
            {this.state.questions.length > 0 && (
              <button
                className={`category questions ${currentFilter ===
                  "questions" && "active"}`}
                data-filter="questions"
                onClick={this.handleFilterClick}
              >
                Questions
              </button>
            )}
            {this.state.blockchain.length > 0 && (
              <button
                className={`category blockchain ${currentFilter ===
                  "blockchain" && "active"}`}
                data-filter="blockchain"
                onClick={this.handleFilterClick}
              >
                Blockchain
              </button>
            )}
            {this.state.cryptography.length > 0 && (
              <button
                className={`category cryptography ${currentFilter ===
                  "cryptography" && "active"}`}
                data-filter="cryptography"
                onClick={this.handleFilterClick}
              >
                Cryptography
              </button>
            )}
            {this.state.refactoring.length > 0 && (
              <button
                className={`category refactoring ${currentFilter ===
                  "refactoring" && "active"}`}
                data-filter="refactoring"
                onClick={this.handleFilterClick}
              >
                Refactoring
              </button>
            )}
            {this.state.refactoring.length > 0 && (
              <button
                className={`category iot ${currentFilter === "iot" &&
                  "active"}`}
                data-filter="iot"
                onClick={this.handleFilterClick}
              >
                IoT
              </button>
            )}
          </div>
        )}
        {this.props.showSearch === "yes" && (
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <input
              type="text"
              onChange={this.handleSearch}
              value={this.state.search}
              placeholder="Search..."
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </div>
        )}
        <hr />
        <ul className="list-none m-t-1">
          {currentFilter === "all" && allPosts
            ? allPosts.map(post => (
                <li key={post.node.id} className="post-preview">
                  <Link
                    key={post.node.id}
                    to={post.node.frontmatter.path + "/"}
                  >
                    <h4>{post.node.frontmatter.title}</h4>
                    <div className="post-preview-content">
                      {this.props.showImage === "yes" && (
                        <div className="post-preview-image">
                          <img
                            src={withPrefix("/default-ogimage.png")}
                            alt={post.node.frontmatter.title}
                          />
                        </div>
                      )}
                      <p
                        className={
                          this.props.showImage === "yes"
                            ? "post-preview-excerpt"
                            : ""
                        }
                      >
                        {post.node.excerpt}
                      </p>
                    </div>
                    <div className="post-preview-note">
                      <div>
                        <strong>{post.node.timeToRead} min</strong> read by{" "}
                        {post.node.frontmatter.author} on{" "}
                        <strong>{post.node.frontmatter.date}</strong> in{" "}
                        <strong
                          className={`post-preview-tags category ${
                            post.node.frontmatter.tags
                          }`}
                        >
                          {post.node.frontmatter.tags}
                        </strong>
                      </div>
                      {this.props.showChevron === "yes" && (
                        <img
                          src={svgRightArrow}
                          style={{
                            height: "24px",
                            justifySelf: "flex-end"
                          }}
                          alt="Arrow"
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))
            : this.state[currentFilter].map(post => (
                <li key={post.node.id} className="post-preview">
                  <Link
                    key={post.node.id}
                    to={post.node.frontmatter.path + "/"}
                  >
                    <h4>{post.node.frontmatter.title}</h4>
                    <div className="post-preview-content">
                      {this.props.showImage === "yes" && (
                        <div className="post-preview-image">
                          <img
                            src={withPrefix("/default-ogimage.png")}
                            alt={post.node.frontmatter.title}
                          />
                        </div>
                      )}
                      <p
                        className={
                          this.props.showImage === "yes"
                            ? "post-preview-excerpt"
                            : ""
                        }
                      >
                        {post.node.excerpt}
                      </p>
                    </div>
                    <div className="post-preview-note">
                      <div>
                        <strong>{post.node.timeToRead} min</strong> read by{" "}
                        {post.node.frontmatter.author} on{" "}
                        <strong>{post.node.frontmatter.date}</strong> in{" "}
                        <strong
                          className={`post-preview-tags category ${
                            post.node.frontmatter.tags
                          }`}
                        >
                          {post.node.frontmatter.tags}
                        </strong>
                      </div>
                      {this.props.showChevron === "yes" && (
                        <img
                          src={svgRightArrow}
                          style={{
                            height: "24px",
                            justifySelf: "flex-end"
                          }}
                          alt="Arrow"
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

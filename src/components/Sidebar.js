import React from "react";
import Link from "gatsby-link";

const activeStyle = {
  color: "#0057e7",
  fontWeight: 600,
  fontSize: "0.95rem"
};

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exam_details: [],
      questions: [],
      blockchain: [],
      cryptography: [],
      refactoring: [],
      iot: []
    };
  }

  filter(pages) {
    let exam_details = [];
    let questions = [];
    let blockchain = [];
    let cryptography = [];
    let refactoring = [];
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
      cryptography,
      refactoring,
      iot
    });
  }

  componentWillMount() {
    // Filter pages into categories
    this.filter(this.props.pageList.allMarkdownRemark.edges);
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <ul className="sidenav">
            <li>
              📝 <em>Exam Details</em>
            </li>
            {this.state.exam_details.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              📝 <em>Questions</em>
            </li>
            {this.state.questions.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              📝 <em>Blockchain</em>
            </li>
            {this.state.blockchain.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              📝 <em>Cryptography</em>
            </li>
            {this.state.cryptography.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              📝 <em>Refactoring</em>
            </li>
            {this.state.refactoring.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
            <li>
              📝 <em>IoT</em>
            </li>
            {this.state.iot.map((page, index) => (
              <li key={page.node.id}>
                <Link to={page.node.frontmatter.path} activeStyle={activeStyle}>
                  {page.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

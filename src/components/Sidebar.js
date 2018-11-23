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
      blockchain: [],
      cryptography: [],
      refactoring: []
    };
  }

  filter(pages) {
    let blockchain = [];
    let cryptography = [];
    let refactoring = [];

    // Filter the data
    pages.map(page => {
      switch (page.node.frontmatter.tags) {
        case "blockchain":
          blockchain.push(page);
          break;
        case "cryptography":
          cryptography.push(page);
          break;
        case "refactoring":
          refactoring.push(page);
          break;
      }
    });

    this.setState({
      blockchain,
      cryptography,
      refactoring
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
          </ul>
        </div>
      </div>
    );
  }
}

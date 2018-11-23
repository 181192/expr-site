import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

import SideBar from "../Sidebar";
import MenuFAB from "../MenuFAB";
import logo from "../../images/logo.png";
import ogImage from "../../../static/default-ogimage.png";
import github from "../../../static/github.svg";

// PrismJS dependency
import "prismjs/themes/prism-okaidia.css";

const website = `https://181192.github.io/expr-site`;

const Header = () => (
  <div
    style={{
      position: "fixed",
      borderBottom: "1px solid #0275d8",
      backgroundColor: "rgba(255,255,255,0.925)",
      height: "3.5rem",
      zIndex: "3",
      left: "0",
      right: "0"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        paddingLeft: "1.05rem",
        paddingRight: "1.05rem",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <Link
        to="/"
        style={{
          color: "#0275d8",
          textDecoration: "none",
          marginRight: ".7rem"
        }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            margin: 0,
            fontSize: "1rem"
          }}
        >
          <img
            src={logo}
            alt="Brand name"
            style={{
              height: "2.25rem",
              marginBottom: "0",
              marginRight: ".5rem"
            }}
          />
          Exam Preparation 2018
        </h1>
      </Link>

      <ul className="nav">
        <li>
          <Link to="/news/">Blog posts</Link>
        </li>
      </ul>
      <ul className="nav social">
        <li>
          <a
            href="https://github.com/181192/expr-site"
            target="_blank"
            rel="noopener"
          >
            <img src={github} alt="Github" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query sidebarPageListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                date(formatString: "MMM DD, YYYY")
                path
                title
                tags
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div>
          <Helmet
            title="Exam Preparation 2018"
            meta={[
              {
                name: "description",
                content: ""
              },
              {
                name: "keywords",
                content: ""
              },
              {
                property: "og:image",
                content: `${website}${ogImage}`
              },
              { property: "og:type", content: "website" },
              { property: "og:url", content: `${website}` },
              {
                property: "og:title",
                content: "Exam Preparation 2018"
              },
              {
                property: "og:description",
                content: ""
              }
            ]}
          />

          <Header />

          <div className="main-wrapper">
            <SideBar pageList={data} />
            <MenuFAB data={data} />
            <div className="main">{children}</div>
          </div>
        </div>
      </React.Fragment>
    )}
  />
);

export default TemplateWrapper;

import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import ReadProgressLine from "../components/ReadProgressLine.js";

export default function Template({ data, location }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data

  // If post doesn't have a defined og image, fall back to default defined here
  const ogImage = `https://blog.georgi-yanev.com/default-ogimage-github.jpg`;

  return (
    <Layout location={location}>
      <div className="blog-post-container">
        <Helmet
          title={`ExPr - ${post.frontmatter.title}`}
          meta={[
            {
              name: "description",
              content: `${post.frontmatter.ogDescription}`
            },
            { name: "keywords", content: `${post.frontmatter.ogKeywords}` },
            { property: "og:type", content: "website" },
            {
              property: "og:url",
              content: `https://blog.georgi-yanev.com${post.frontmatter.path}`
            },
            {
              property: "og:image",
              content: ogImage
            },
            {
              property: "og:title",
              content: `Georgi Yanev | ${post.frontmatter.title}`
            },
            {
              property: "og:description",
              content: `${post.frontmatter.ogDescription}`
            },
            {
              name: "twitter:card",
              content: "summary"
            },
            {
              name: "twitter:site",
              content: "@jumpalottahigh"
            },
            {
              name: "twitter:image",
              content: ogImage
            },
            {
              name: "twitter:creator",
              content: "@jumpalottahigh"
            },
            {
              name: "twitter:title",
              content: `Georgi Yanev | ${post.frontmatter.title}`
            },
            {
              name: "twitter:description",
              content: `${post.frontmatter.ogDescription}`
            }
          ]}
        >
          {/* Google Structured Data */}
          <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://blog.georgi-yanev.com${post.frontmatter.path}"
            },
            "headline": "${post.frontmatter.title}",
            "name": "${post.frontmatter.title}",
            "author": {
              "@type": "Person",
              "name": "${post.frontmatter.author}"
            },
            "datePublished": "${post.frontmatter.dateUnformatted}",
            "dateModified": "${post.frontmatter.dateUnformatted}",
            "image": [
              "${ogImage}",
              "${ogImage}",
              "${ogImage}"
            ],
            "publisher": {
              "@type": "Organization",
              "name": "Georgi's Blog",
              "logo": {
                "@type": "ImageObject",
                "url": "https://blog.georgi-yanev.com/default-ogimage-generic.png"
              }
            },
            "description": "${post.excerpt}",
            "articleSection": "${post.excerpt}",
            "url": "https://blog.georgi-yanev.com${post.frontmatter.path}"
          }
        `}</script>
        </Helmet>
        <div className="blog-post">
          <ReadProgressLine />
          <h1>{post.frontmatter.title}</h1>
          <div className="disclaimer-container">
            <span className="year">{post.frontmatter.date}</span>
            <span className="disclaimer">{post.frontmatter.author}</span>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        dateUnformatted: date
        path
        title
        tags
        author
        ogDescription
      }
    }
  }
`;

import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import ReadProgressLine from '../components/ReadProgressLine.js'
import ogImage from '../../static/default-ogimage.png'
import favicon from '../../static/favicon.ico'

export default function Template({ data, location }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data

  const website = `https://https://181192.github.io/expr-site`

  return (
    <Layout location={location}>
      <div className="blog-post-container">
        <Helmet
          title={`ExPr - ${post.frontmatter.title}`}
          meta={[
            {
              name: 'description',
              content: `${post.frontmatter.ogDescription}`,
            },
            { name: 'keywords', content: `${post.frontmatter.ogKeywords}` },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:url',
              content: `${website}${post.frontmatter.path}`,
            },
            { property: 'og:image', content: `${ogImage}` },
            {
              property: 'og:title',
              content: `ExPr | ${post.frontmatter.title}`,
            },
            {
              property: 'og:description',
              content: `${post.frontmatter.ogDescription}`,
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          {/* Google Structured Data */}
          <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${website}${post.frontmatter.path}"
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
              "name": "ExPr",
              "logo": {
                "@type": "ImageObject",
                "url": "${website}"
              }
            },
            "description": "${post.excerpt}",
            "articleSection": "${post.excerpt}",
            "url": "${website}${post.frontmatter.path}"
          }
        `}</script>
        </Helmet>
        <div className="blog-post">
          <ReadProgressLine />
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
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
`

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostsList'

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <div>
      <h1>Exam Preparation 2018</h1>
      <p>
        This page is build to provide all curriculum for the DAT159 subject at
        HVL. This page is build with <strong>Gatsby 💜</strong> (a React based
        static site generator) and is hosted on <strong>Github Pages</strong>.
      </p>
      <p>The page is under construction.</p>
      <h4 style={{ marginTop: '2rem' }}>Last 5 recent posts:</h4>
      <PostList
        showChevron="yes"
        showImage="yes"
        showCategories="no"
        showSearch="no"
        posts={data.allMarkdownRemark.edges}
      />
    </div>
  </Layout>
)

export default IndexPage

export const HomePageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 390)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            tags
          }
        }
      }
    }
  }
`

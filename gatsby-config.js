module.exports = {
  pathPrefix: `/expr-site`,
  siteMetadata: {
    title: `ExPr 2018`,
    siteUrl: `https://181192.github.io/expr-site`,
    author: `Kristoffer-Andre Kalliainen & Peder Wiig Aalen`,
    description: `Exam Preparation 2018`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-"
            }
          },
          "gatsby-remark-smartypants"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path +
                    "/",
                  guid:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path +
                    "/",
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 140)
                    html
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            }
            `,
            output: "/feed.xml"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "EXPR",
        short_name: "EXPR",
        icons: [
          {
            src: "favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "favicons/android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png"
          }
        ],
        theme_color: "#5271ff",
        background_color: "#5271ff",
        start_url: "https://181192.github.io/expr-site/",
        display: "standalone"
      }
    },
    `gatsby-plugin-offline`
  ]
};

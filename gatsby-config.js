module.exports = {
  pathPrefix: `/expr-site`,
  siteMetadata: {
    title: `Exam Preparation 2018`,
    siteUrl: `https://example.com`,
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
          "gatsby-remark-copy-linked-files",
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
      // If you’re using this plugin together with gatsby-plugin-offline (recommended),
      // this plugin should be listed before the offline plugin so that it can cache the created manifest.json.
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Exam Preparation 2018",
        short_name: "ExPr",
        start_url: "/expr-site",
        background_color: "#f7f0eb",
        theme_color: "#0275d8",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};

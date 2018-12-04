import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ogImage from '../static/default-ogimage.png'
import favicon from '../static/favicon.ico'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <Helmet
          title={`ExPr - Exam Preparation 2018`}
          meta={[
            {
              name: 'description',
              content: `This page is build to provide all curriculum for the DAT159 subject at HVL. This page is build with Gatsby 💜 (a React based static site generator) and is hosted on Github Pages.`,
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:url',
              content: `https://181192.github.io/expr-site/`,
            },
            { property: 'og:image', content: `${ogImage}` },
            { property: 'og:title', content: `ExPr | Exam Preparation 2018` },
            {
              property: 'og:description',
              content: `This page is build to provide all curriculum for the DAT159 subject at HVL. This page is build with Gatsby 💜 (a React based static site generator) and is hosted on Github Pages.`,
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

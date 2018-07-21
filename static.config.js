import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home'
    },
    {
      is404: true,
      component: 'src/containers/404'
    }
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{`KS 🌹 Personal Website`}</title>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"
            />
            <link href="https://fonts.googleapis.com/css?family=Lato|Roboto" rel="stylesheet" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}

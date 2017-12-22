import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="th">
        <Head>
          <title>KS Portfolio</title>
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" async />
          <link rel="stylesheet" href="/static/css/font-awesome.min.css" async />

          <meta name="description" content="KS Portfolio" />
          <meta name="keywords" content="KS Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
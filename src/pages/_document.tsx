/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import UFO from '@assets/overgold-gold-logo.svg';

export default class MyDocument extends Document {

  imgPreview:string = 'https://overgold.app/img/bigDiper.png'|| 'https://overgold.app/img/bigdiper.png'


  render() {
    const image=this.imgPreview
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta property="og:title" content="OverGold Explorer" />
          <meta property="og:site_name" content="OverGold Explorer" />
          <meta property="og:description" content="Up-to-date and innovative Blockchain Explorer has been implemented for OverGold networks. A user-friendly and clear tool for working with transactions in blockchain, viewing statistics and monitoring the network as a whole. Blockchain Explorer allows to build custom queries and selections based on movements/transactions in the network. It has a unique opportunity to export data in a convenient format for a specific set of transactions that the user needs." />
          <meta property="og:image" content={image} />
        </Head>
        <body>
          <Main />
          <div id="tooltip" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

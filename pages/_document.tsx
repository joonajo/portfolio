// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static getInitialProps(ctx: any) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = ctx.renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Portfolio page for Joona Joenpolvi, containing Joona's most notable solo front-end projects. More can be found on Github."
          />
          <meta
            name="keywords"
            content="Joona Joenpolvi, joonajo, frontend, web dev, developer, web developer, front end, react, typescript, nextjs, portfolio,"
          />
          <meta name="author" content="Joona Joenpolvi" />

          <meta name="theme-color" content="#ffffff" />
          <meta name="background-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="" />
          <meta
            name="google-site-verification"
            content="1gHGqepFHNX3VpXM7M5wCVG8fVrlDBZjL3ZjIUmIHjE"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,600,700,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

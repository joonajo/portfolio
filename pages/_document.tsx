// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Portfolio //</title>
          <meta charSet="UTF-8" />
          <meta name="description" content="Portfolio page for Joona Joenpolvi." />
          <meta name="keywords" content="Joona Joenpolvi, joonajo, frontend, web dev, developer, web developer, front end, react, typescript, nextjs, portfolio," />
          <meta name="author" content="Joona Joenpolvi" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="background-color" content="#ffffff" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="" />
          <meta name="google-site-verification" content="1gHGqepFHNX3VpXM7M5wCVG8fVrlDBZjL3ZjIUmIHjE" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,600,700,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
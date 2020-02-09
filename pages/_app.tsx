import React from 'react'

import App from 'next/app'
import { AuthProvider } from '../context/authContext'
import { PortfolioProvider } from '../context/portfolioContext'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }

    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker.getRegistration()
    //     .then(registration => {
    //       if (registration) {
    //         registration.unregister()
    //       }
    //     })
    // }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
        <AuthProvider>
            <PortfolioProvider>
                <Component {...pageProps} />
            </PortfolioProvider>
        </AuthProvider>
    )
  }
}

export default MyApp
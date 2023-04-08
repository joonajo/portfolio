import App from 'next/app';
import { Playfair_Display } from 'next/font/google';
import React from 'react';

import { AuthProvider } from '../context/authContext';
import { PortfolioProvider } from '../context/portfolioContext';
import './home/index.css';

const playfairFont = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <PortfolioProvider>
          <main className={playfairFont.className}>
            <Component {...pageProps} />
          </main>
        </PortfolioProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;

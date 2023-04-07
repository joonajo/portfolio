import App from 'next/app';
import { Ubuntu } from 'next/font/google';
import React from 'react';

import { AuthProvider } from '../context/authContext';
import { PortfolioProvider } from '../context/portfolioContext';
import './home/index.css';

const ubuntuFont = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin', 'latin-ext'] });

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <PortfolioProvider>
          <main className={ubuntuFont.className}>
            <Component {...pageProps} />
          </main>
        </PortfolioProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;

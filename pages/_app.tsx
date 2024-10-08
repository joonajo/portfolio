import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from 'next/app';
import { Playfair_Display } from 'next/font/google';
import React from 'react';

import { AuthProvider } from '../context/authContext';

import './home/index.css';

const queryClient = new QueryClient();

const playfairFont = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext'],
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <main className={playfairFont.className}>
            <Component {...pageProps} />
          </main>
        </AuthProvider>
      </QueryClientProvider>
    );
  }
}

export default MyApp;

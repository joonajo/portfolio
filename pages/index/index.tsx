import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/UI/Layout/Layout'
import Content from '../../components/Content/Content'

const css = require('./index.module.css')

const Home: NextPage = (): JSX.Element => {
    React.useEffect(() => {
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
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>Portfolio</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="Joona Joenpolvi's Portfolio." />
                <meta name="keywords" content="Joona Joenpolvi, joonajo, react, typescript, nextjs, portfolio," />
                <meta name="author" content="Joona Joenpolvi" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="background-color" content="#ffffff" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="" />
            </Head>
            <Layout>
                <Cover />
                <Content />
            </Layout>
        </React.Fragment>
    )
}
export default Home
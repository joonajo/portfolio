import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/UI/Layout/Layout'
import Content from '../../components/Content/Content'

const css = require('./index.module.css')

const Home: NextPage = (): JSX.Element => {

    return (
        <React.Fragment>
            <Head>
                <title>Portfolio</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Layout>
                <Cover />
                <Content />
            </Layout>
        </React.Fragment>
    )
}
export default Home
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
                <meta charSet="UTF-8" />
                <meta name="description" content="Portfolio page" />
                <meta name="keywords" content="Joona Joenpolvi, joonajo, react, typescript, nextjs, portfolio," />
                <meta name="author" content="Joona Joenpolvi" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout>
                <Cover />
                <Content />
            </Layout>
        </React.Fragment>
    )
}
export default Home
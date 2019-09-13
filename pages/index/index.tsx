import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/layout/Layout'

const Home: NextPage = (): JSX.Element => {

    return (
        <Layout title={"Portfolio"}>
            <Cover />
        </Layout>
    )
}
export default Home
import React from 'react'
import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/Layout/Layout'
import Content from '../../components/Content/Content'

const Home: NextPage = (): JSX.Element => {

    return (
        <Layout title={"Portfolio"}>
            <Cover />
            <Content />
        </Layout>
    )
}
export default Home
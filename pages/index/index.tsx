import React from 'react'
import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/Layout/Layout'

const Home: NextPage = (): JSX.Element => {

    return (
        <Layout title={"Portfolio"}>
            <Cover />
        </Layout>
    )
}
export default Home
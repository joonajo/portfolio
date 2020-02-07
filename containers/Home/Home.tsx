import React from 'react'

import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/UI/Layout/Layout'
import Content from '../../components/Content/Content'
import { CubeSpinner } from '../../components/UI/Spinner/Spinner'

const css = require('./Home.module.css')

const Home: NextPage = (): JSX.Element => {
    const [bgLoaded, setBgLoaded] = React.useState<boolean>(false)

    React.useEffect(() => {
        // check if bg image is already cached
        // if yes, set as loaded
        const image = new Image()
        image.src = '/images/palm.png'
        if (image.complete) setBgLoaded(true)
    }, [])

    return (
        <>
            { !bgLoaded && <Loading /> }
            <Layout>
                <Cover load={() => setBgLoaded(true)} />
                { bgLoaded && <Content /> }
            </Layout>
        </>
    )
}

const Loading: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={css.Loading}>
            <CubeSpinner />
        </div>
    )
}

export default Home
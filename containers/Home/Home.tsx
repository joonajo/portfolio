import React from 'react'

import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/UI/Layout/Layout'
import Content from '../../components/Content/Content'
import { CubeSpinner } from '../../components/UI/Spinner/Spinner'
import { IPortfolioContext, PortfolioContext, TPortfolioState, TPortfolioActionTypes } from '../../context/portfolioContext'
import { TDispatch } from '../../context/authContext'
import { IPortfolioItem } from '../../interfaces/interfaces'

const css = require('./Home.module.css')

const Home: NextPage = (): JSX.Element => {
    const [bgLoaded, setBgLoaded] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        // check if bg image is already cached
        // if yes, set as loaded
        const image = new Image()
        image.src = '/images/palm.png'
        if (image.complete) setBgLoaded(true)
    }, [])

    const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext)
    const portfolioState: TPortfolioState = portfolioContext.state
    const portfolioDispatch: TDispatch = portfolioContext.dispatch!

    React.useEffect(() => {
        if (portfolioState && portfolioDispatch) {
            if (portfolioState.items.length === 0) {
                const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items.json'

                const newItems: IPortfolioItem[] = []
                
                fetch(baseURL, { method: 'get' }).then(response => response.json())
                    .then(data => {
                        if (data) {
                            Object.keys(data).forEach(item => {
                                newItems.push(data[item])
                            })
                            portfolioDispatch({ type: TPortfolioActionTypes.SET_ITEMS, payload: newItems })
                        }
                        setLoading(false)
                    })
            } else {
                setLoading(false)
            }
        }
    }, [portfolioState])

    return (
        <>
            { (!bgLoaded || loading) && <Loading /> }
            <Layout>
                <Cover load={() => setBgLoaded(true)} />
                { bgLoaded  && !loading && <Content /> }
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
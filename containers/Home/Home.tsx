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
    const [ready, setReady] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (bgLoaded && !loading) setReady(true) 
    }, [bgLoaded, loading])

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
            }
        }
    }, [portfolioState])

    return (
        <>
            <Loading show={!ready} />
            <Layout>
                <Cover show={ready} load={() => setBgLoaded(true)} />
                { bgLoaded  && !loading && <Content /> }
            </Layout>
        </>
    )
}

interface ILoadingComponent {
    show: boolean
}

const Loading: React.FunctionComponent<ILoadingComponent> = ({ show }): JSX.Element => {
    const styles = [
        css.Loading,
        !show && css.out
    ].join(' ')

    const animEndHandler = () => {
        console.log('anim end')
    }

    return (
        <div className={styles} onAnimationEnd={animEndHandler}>
            <CubeSpinner />
        </div>
    )
}

export default Home
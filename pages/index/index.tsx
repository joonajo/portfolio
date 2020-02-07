import React from 'react'

import { NextPage } from 'next'
import Cover from '../../components/Cover/Cover'
import Layout from '../../components/UI/Layout/Layout'
import Content from '../../components/Content/Content'
import { CubeSpinner } from '../../components/UI/Spinner/Spinner'
import Home from '../../containers/Home/Home'

const css = require('./index.module.css')

const Index: NextPage = (): JSX.Element => {
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
        <Home />
    )
}

export default Index
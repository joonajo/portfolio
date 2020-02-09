import React from 'react'

import { NextPage } from 'next'
import Home from '../../containers/Home/Home'

const css = require('./index.module.css')

const Index: NextPage = (): JSX.Element => {
    React.useEffect(() => {
        document.title = "Portfolio // Home"
    }, [])

    return (
        <Home />
    )
}

export default Index
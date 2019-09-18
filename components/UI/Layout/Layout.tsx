import React from 'react'
import Head from 'next/head'
import Footer from '../Footer/Footer'
import Toolbar from '../Toolbar/Toolbar'
import { ToolbarProvider } from '../../../context/toolbarContext'

const css = require('./Layout.css')

interface IProps {
    title: string
}

const Layout: React.FunctionComponent<IProps> = ({ children, title }): JSX.Element => {

    return (
        <ToolbarProvider>
            <div className={css.Layout}>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/svg-with-js.css"/>
                </Head>
                <Toolbar />
                {children}
                <Footer />
            </div>
        </ToolbarProvider>
    )
}

export default Layout
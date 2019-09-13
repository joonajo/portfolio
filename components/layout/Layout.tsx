import React from 'react'
import Head from 'next/head'

const css = require('./Layout.css')

interface IProps {
    title: string
}

const Layout: React.FunctionComponent<IProps> = ({ children, title }): JSX.Element => {

    return (
        <div className={css.Layout}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            </Head>
            {children}
        </div>
    )
}

export default Layout
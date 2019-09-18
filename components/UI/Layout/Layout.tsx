import React from 'react'
import Head from 'next/head'
import Footer from '../Footer/Footer'
import Toolbar from '../Toolbar/Toolbar'
import { ToolbarProvider } from '../../../context/toolbarContext'

const css = require('./Layout.css')

interface IProps {

}

const Layout: React.FunctionComponent<IProps> = React.memo(({ children }): JSX.Element => {
    return (
        <ToolbarProvider>
            <div className={css.Layout}>
                <Toolbar />
                {children}
                <Footer />
            </div>
        </ToolbarProvider>
    )
})

export default Layout
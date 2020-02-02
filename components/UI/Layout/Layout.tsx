import React from 'react'
import Footer from '../Footer/Footer'
import Toolbar from '../Toolbar/Toolbar'
import { ToolbarProvider } from '../../../context/toolbarContext'

const css = require('./Layout.module.css')

interface ILayout {
    children: JSX.Element[]
}

const Layout: React.FunctionComponent<ILayout> = React.memo(({ children }): JSX.Element => {
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
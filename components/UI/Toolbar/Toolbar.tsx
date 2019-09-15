import React from 'react'
import Link from 'next/link'
import { IToolbar, ToolbarContext } from '../../../context/toolbarContext'

const css = require('./Toolbar.module.css')

const Toolbar: React.FunctionComponent = (): JSX.Element => {
    const toolbarContext: IToolbar = React.useContext(ToolbarContext)
    const show = React.useRef(toolbarContext.show)

    const classes = [
        css.Toolbar,
        show.current && css.enabled,
    ].join(' ')

    return (
        <div className={classes}>
            <div className={css.PageLinks}>
                <Link href="/Portfolio"><a>Portfolio</a></Link>
                <Link href='/About'><a>About</a></Link>
            </div>
        </div>
    )
}

export default Toolbar
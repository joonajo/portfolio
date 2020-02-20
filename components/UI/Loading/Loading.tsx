import * as React from 'react'

import { CubeSpinner } from '../Spinner/Spinner'
import css from './Loading.module.css'

interface ILoadingComponent {
    show: boolean
    transparent?: boolean
    fadeout?: boolean
    slideout?: boolean
    fullscreen?: boolean
}

const Loading: React.FunctionComponent<ILoadingComponent> = ({ show, transparent, fadeout, slideout, fullscreen }): JSX.Element => {
    const styles = [
        css.Loading,
        transparent && css.transparent,
        fullscreen ? css.fullscreen : css.notfull,
        (!show && fadeout) && css.fadeout,
        (!show && slideout) && css.slideout,
    ].join(' ')

    return (
        <div className={styles}>
            <CubeSpinner />
        </div>
    )
}

export default Loading
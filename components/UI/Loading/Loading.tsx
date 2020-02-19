import * as React from 'react'

import { CubeSpinner } from '../Spinner/Spinner'
import css from './Loading.module.css'

interface ILoadingComponent {
    show: boolean
    transparent?: boolean
    fadeout?: boolean
    slideout?: boolean
}

const Loading: React.FunctionComponent<ILoadingComponent> = ({ show, transparent, fadeout, slideout }): JSX.Element => {
    const styles = [
        css.Loading,
        transparent && css.transparent,
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
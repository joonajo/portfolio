import * as React from 'react'

const css = require('./Spinner.module.css')

export const CubeSpinner: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={css.CubeContainer}>
            <div className={[css.Cube1, css.Cube].join(' ')}></div>
            <div className={[css.Cube2, css.Cube].join(' ')}></div>
            <div className={[css.Cube3, css.Cube].join(' ')}></div>
            <div className={[css.Cube4, css.Cube].join(' ')}></div>
        </div>  
    )
}
import React from 'react'

const css = require('./Cover.css')

const Cover = (): JSX.Element => {

    return (
        <div className={css.Main}>
            <h1 className={css.Title}>Joona Joenpolvi</h1>
        </div>
    )
}

export default Cover
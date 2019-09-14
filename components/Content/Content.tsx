import React from 'react'

const css = require('./Content.css')

const Content: React.FunctionComponent = (): JSX.Element => {

    return (
        <div className={css.Content}>
            <span>Content.</span>
        </div>
    )
}

export default Content
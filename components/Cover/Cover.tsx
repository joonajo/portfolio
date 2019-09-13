import React from 'react'

const css = require('./Cover.css')

const Cover = (): JSX.Element => {

    return (
        <div className={css.Main}>
            <div className={css.TitleContainer}>
                <span className={css.FirstName}>First Name</span>
                <span className={css.Surname}>Last Name</span>
                <i className="fab fa-github"></i>
            </div>
        </div>
    )
}

export default Cover
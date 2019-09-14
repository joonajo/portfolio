import React from 'react'
import MediaIcons from '../Layout/Icons/MediaIcons/MediaIcons'

const css = require('./Cover.css')

const Cover = React.memo((): JSX.Element => {

    return (
        <div className={css.Main}>
            <div className={css.Parallax}>
            </div>
            <div className={css.MediaIcons}>
                <MediaIcons vertical />
            </div>
            <div className={css.TitleContainer}>
                <span className={css.FirstName}>Joona</span>
                <span className={css.Surname}>Joenpolvi</span>
                <span className={css.Description}>Front-End Developer</span>
            </div>
        </div>
    )
})

export default Cover
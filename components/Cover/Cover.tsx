import React from 'react'
import MediaIcons from '../Layout/Icons/MediaIcons/MediaIcons'

const css = require('./Cover.css')

const Cover = React.memo((): JSX.Element => {

    return (
        <div className={css.Main}>
            <div className={css.MediaIcons}>
                <MediaIcons />
            </div>
            <div className={css.TitleContainer}>
                <span className={css.FirstName}>Joona</span>
                <span className={css.Surname}>Joenpolvi</span>
                <span className={css.Description}>Front-End Developer</span>
            </div>
            <div className={css.BgContainer}>
                <img src='/static/images/palmtree.jpg' alt='palmtree' className={css.BgImage} />
            </div>
        </div>
    )
})

export default Cover
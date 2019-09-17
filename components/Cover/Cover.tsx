import React from 'react'
import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { IToolbar, ToolbarContext } from '../../context/toolbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./Cover.css')

const Cover = React.memo((): JSX.Element => {
    const toolbarContext: IToolbar = React.useContext(ToolbarContext)

    React.useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true)

        return () => window.removeEventListener('scroll', scrollHandler, true)
    }, [])

    const scrollHandler = () => {

    }  

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
            <div className={css.ArrowContainer}>
                <FontAwesomeIcon icon={icons.faChevronDown} size="lg" />
            </div>
        </div>
    )
})

export default Cover
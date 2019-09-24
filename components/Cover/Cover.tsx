import React from 'react'
import MediaIcons from '../UI/Icons/MediaIcons/MediaIcons'
import { IToolbar, ToolbarContext } from '../../context/toolbarContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./Cover.css')

const Cover = React.memo((): JSX.Element => {
    const toolbarContext: IToolbar = React.useContext(ToolbarContext)
    const coverRef = React.useRef<HTMLDivElement>(null)
    const[height, setHeight] = React.useState<number | undefined>(undefined)

    console.log(height)

    React.useEffect(() => {
        setHeight(window.innerHeight)

        window.addEventListener('scroll', scrollHandler, true)

        return () => window.removeEventListener('scroll', scrollHandler, true)
    }, [])

    const scrollHandler = () => {

    }

    const scrollToPortfolio = React.useCallback(() => {
        if (coverRef && coverRef.current) {
            const posToScrollTo: number = coverRef.current.clientHeight
    
            window.scroll({
                top: posToScrollTo,
                left: 0,
                behavior: "smooth",
            })
        }
    }, [coverRef])

    const[arrowIn, setArrowIn] = React.useState<boolean | undefined>(undefined)

    const arrowTextClasses = [
        css.ArrowText,
        arrowIn ? css.in : arrowIn === false ? css.out : null
    ].join(' ')

    const transitionHandler = () => {
        if (arrowIn === false) {
            setArrowIn(undefined)
        }
    }

    const hoverHandler = () => {
        setArrowIn(true)
        // if (arrowIn === undefined) {
        //     setArrowIn(true)
        // }
    }

    const mouseOutHandler = () => {
        setArrowIn(false)
        // if (arrowIn) {
        //     setArrowIn(false)
        // }
    }

    return (
        <div className={css.Main} ref={coverRef} style={{height: `${height}px`}}>
            <div className={css.BackgroundContainer}>
                <img src="/static/images/palm.jpg" alt="cover-bg-palm" className={css.BackgroundImage} style={{minHeight: `${height}px`}} />
                <div className={css.BackgroundMask}></div>
            </div>
            <div className={css.MediaIcons}>
                <MediaIcons vertical />
            </div>
            <div className={css.TitleContainer}>
                <h1 className={css.FirstName}>Joona</h1>
                <h1 className={css.Surname}>Joenpolvi</h1>
                <h3 className={css.Description}>Front-End Developer</h3>
            </div>
            <div className={css.ArrowContainer} >
                <div className={css.ArrowIcon}
                    onClick={scrollToPortfolio}
                    onMouseOver={hoverHandler}
                    onMouseOut={mouseOutHandler}> 
                    <FontAwesomeIcon icon={icons.faChevronDown} size="lg" />
                </div>
                <p className={arrowTextClasses} onTransitionEnd={transitionHandler}>to portfolio</p>
            </div>
        </div>
    )
})

export default Cover
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./ExpandedVideo.module.css')

interface IExpandedVideo {
    video_src: string
    close: () => void
}

const ExpandedVideo: React.FunctionComponent<IExpandedVideo> = ({ video_src, close }): JSX.Element => {
    const[unmount, setUnmount] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('keydown', keyHandler, true)

        return () => window.removeEventListener('keydown', keyHandler, true)
    }, [])

    React.useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle: string = window.getComputedStyle(document.body).overflow!  
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden'
        // Re-enable scrolling when component unmounts
        return () => { document.body.style.overflow = originalStyle }
    }, []) // Empty array ensures effect is only run on mount and unmount

    const keyHandler = React.useCallback((event: KeyboardEvent) => {
        console.log(event.key)
        switch (event.key) {
            case 'Escape':
                setUnmount(true)
                setTimeout(() => {
                    close()
                }, 300)
                break;

            default:
                break;
        }
    }, [])

    const classes = [
        css.Main,
        unmount ? css.unmount : css.mount,
    ].join(' ')

    return (
        <div className={classes}>
            <div className={css.VideoContainer}>
                <video className={css.Video} controls >
                    <source src={video_src} type="video/webm"/>
                </video>
            </div>
            <div className={css.CloseButton} onClick={() => close()}>
                <FontAwesomeIcon icon={icons.faTimes} />
            </div>
        </div>
    )
}

export default ExpandedVideo
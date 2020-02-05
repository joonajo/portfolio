import * as React from 'react'

import { NextPage } from 'next'

import { CubeSpinner } from '../../components/UI/Spinner/Spinner'
import Auth from '../../containers/Auth/Auth'
import Admin from '../../containers/Admin/Admin'

const css = require('./index.module.css')

const AdminPage: NextPage = (): JSX.Element => {
    const [signedIn, setSignedIn] = React.useState<boolean>(false)
    const [sending, setSending] = React.useState<boolean>(false)
    const [screensize, setScreensize] = React.useState<{ width: number, height: number}>()

    React.useEffect(() => {
        document.title = 'Portfolio // Admin'

        setScreensize({
            width: window.innerWidth,
            height: window.innerHeight
        })

        if (localStorage.length !== 0) {
            // check for auth info in local storage
            // compare current time in milliseconds to expire time in storage
            // if current time is LESS, use the auth info from storage to refresh
            // else, clear local storage
            if (new Date().getTime() < +(localStorage.getItem('expireTime')!)) {
                console.log('use old auth info')
                localStorage.clear()
            } else {
                console.log('clear local storage')
                localStorage.clear()
            }
        }
    }, [])

    return (
        <div className={css.Main} style={{minHeight: `${screensize?.height}px`, minWidth: `${screensize?.width}px`}}>
            { !signedIn && <Auth setSending={setSending} setSignedIn={setSignedIn} /> }
            { signedIn && <Admin /> }
            { sending && <Loading /> }
        </div>
    )
}

const Loading: React.FunctionComponent = (): JSX.Element => (
    <div className={css.Loading}>
        <CubeSpinner />
    </div>
)


export default AdminPage
import * as React from 'react'

import Auth from '../../containers/Auth/Auth'
import { CubeSpinner } from '../../components/UI/Spinner/Spinner'
import { IPortfolioItem } from '../../interfaces/interfaces'
import { IAuthContext, AuthContext, TAuthState, TDispatch } from '../../context/authContext'
import { Languages, IPortfolioContext, PortfolioContext, TPortfolioState, TPortfolioActionTypes } from '../../context/portfolioContext'
import PortfolioItems from '../../components/Admin/PortfolioManagement/Portfolio'

const css = require('./Admin.module.css')

const Admin: React.FunctionComponent = (): JSX.Element => {
    const authContext: IAuthContext = React.useContext(AuthContext)
    const authState: TAuthState = authContext.state
    const authDispatch: TDispatch = authContext.dispatch!

    const [sending, setSending] = React.useState<boolean>(true)
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
            const expireTime = (localStorage.getItem('expireTime'))
            if (expireTime) {
                // if auth token has not expired yet
                if (new Date().getTime() < +expireTime) {
                    const authInfo = {
                        email: localStorage.getItem('email')!,
                        password: localStorage.getItem('password')!,
                        idToken: localStorage.getItem('idToken')!
                    }
                    authDispatch({ type: 'signin', payload: authInfo })
                    setSending(false)
                // if auth has expired
                } else {
                    localStorage.clear()
                    setSending(false)
                }
            }
        } else {
            setSending(false)
        }
    }, [])

    const signInHandler = (email: string, password: string, idToken: string) => {
        const authInfo = {
            email: email,
            password: password,
            idToken: idToken
        }
        authDispatch({ type: 'signin', payload: authInfo })
    }

    return (
        <div className={css.Main} style={{minHeight: `${screensize?.height}px`, minWidth: `${screensize?.width}px`}}>
            { !authState.signedIn && <Auth setSending={setSending} signIn={signInHandler} /> }
            { sending && <Loading /> }
            { authState. signedIn && <AdminContent token={authState.idToken!} /> }
        </div>
    )
}

interface IAdminContent {
    token: string
}

const AdminContent: React.FunctionComponent<IAdminContent> = ({ token }): JSX.Element => {
    const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext)
    const portfolioState: TPortfolioState = portfolioContext.state
    const portfolioDispatch: TDispatch = portfolioContext.dispatch!

    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        if (portfolioState && portfolioDispatch) {
            if (portfolioState.items.length === 0) {
                const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items.json'

                const newItems: IPortfolioItem[] = []
                
                fetch(baseURL, { method: 'get' }).then(response => response.json())
                    .then(data => {
                        if (data) {
                            Object.keys(data).forEach(item => {
                                newItems.push(data[item])
                            })
                            portfolioDispatch({ type: TPortfolioActionTypes.SET_ITEMS, payload: newItems })
                        }
                        setLoading(false)
                    })
            } else {
                setLoading(false)
            }
        }
    }, [portfolioState])
   
    return (
        <div className={css.AdminContentWrapper}>
            { loading ?
                <div className={css.Loading}>
                    <CubeSpinner />
                </div>
                : <PortfolioItems items={portfolioState.items} />
            }
        </div>
    )
}

const Loading: React.FunctionComponent = (): JSX.Element => (
    <div className={css.Loading}>
        <CubeSpinner />
    </div>
)

export default Admin

import * as React from 'react'

import { NextPage } from 'next'

import Auth from '../../containers/Auth/Auth'
import { CubeSpinner } from '../../components/UI/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'
import { IPortfolioItem } from '../../interfaces/interfaces'

const css = require('./Admin.module.css')

type TAuthState = {
    signedIn: boolean
    email?: string
    password?: string
    idToken?: string
}

type TAuthActions = 
| ({ type: 'signin', payload: { email: string, password: string, idToken: string } })
| ({ type: 'signout' })

const initialAuthState: TAuthState = {
    signedIn: false
}

const signIn = (state: TAuthState, action: TAuthActions): TAuthState => {
    if (action.type !== 'signin') return { ...state }
    
    const updatedState: TAuthState = {
        ...state,
        signedIn: true,
        email: action.payload?.email,
        password: action.payload?.password,
        idToken: action.payload?.idToken,
    }

    return {
        ...updatedState
    }
}

const authReducer = (state: TAuthState = initialAuthState, action: TAuthActions): TAuthState => {
    switch (action.type) {
        case 'signin':
            return signIn(state, action)

        case 'signout':
            return {
                signedIn: false
            }
    
        default:
            return { ...state }
    }
}


const Admin: React.FunctionComponent = (): JSX.Element => {
    const [state, dispatch] = React.useReducer(authReducer, initialAuthState)
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
                    dispatch({ type: 'signin', payload: authInfo })
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
        dispatch({ type: 'signin', payload: authInfo })
    }

    return (
        <div className={css.Main} style={{minHeight: `${screensize?.height}px`, minWidth: `${screensize?.width}px`}}>
            { !state.signedIn && <Auth setSending={setSending} signIn={signInHandler} /> }
            { sending && <Loading /> }
            { state. signedIn && <AdminContent /> }
        </div>
    )
}

const Loading: React.FunctionComponent = (): JSX.Element => (
    <div className={css.Loading}>
        <CubeSpinner />
    </div>
)

const AdminContent: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={css.AdminContentWrapper}>
            <PortfolioItems />
        </div>
    )
}

interface IPortfolioItems {
    items?: IPortfolioItem[]
}

const PortfolioItems: React.FunctionComponent<IPortfolioItems> = ({ items }): JSX.Element => {
    return (
        <div className={css.ItemsContainer}>
            { items && items.map((item: IPortfolioItem) => {
                return (
                    <div>
                        item
                    </div>
                )
            })}
            <AddPortfolioItem />
        </div>
    )
}

const AddPortfolioItem: React.FunctionComponent = (): JSX.Element => {
    const [showForm, setShowForm] = React.useState<boolean>(false)

    const addItemClickedHandler = () => {
        setShowForm(true)
    }

    return (
        <div className={css.AddItemContainer}>
            <span className={css.AddItemButton}>add item <FontAwesomeIcon icon={icons.faPlus} className={css.AddItemIcon} /></span>
            {  }
        </div>
    )
}

export default Admin

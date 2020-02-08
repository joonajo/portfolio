import * as React from 'react'

import Auth from '../../containers/Auth/Auth'
import { CubeSpinner } from '../../components/UI/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'
import { IPortfolioItem } from '../../interfaces/interfaces'
import { IAuthContext, AuthContext, TAuthState, TDispatch } from '../../context/authContext'
import { Languages } from '../../portfolio/portfolio'

const css = require('./Admin.module.css')

const Admin: React.FunctionComponent = (): JSX.Element => {
    const authContext: IAuthContext = React.useContext(AuthContext)
    const state: TAuthState = authContext.state
    const dispatch: TDispatch = authContext.dispatch!

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
            { state. signedIn && <AdminContent token={state.idToken!} /> }
        </div>
    )
}

const Loading: React.FunctionComponent = (): JSX.Element => (
    <div className={css.Loading}>
        <CubeSpinner />
    </div>
)

interface IAdminContent {
    token: string
}

const AdminContent: React.FunctionComponent<IAdminContent> = ({ token }): JSX.Element => {
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

interface IForm {
    [title: string]: any
    description: any
    languages: any
    link: any
    github: any
    video_src: any
    gif_src: any
    desktop: any
    mobile: any
}

const initialForm: IForm = {
    title: {
        id: 'title',
        elemType: 'input',
        type: 'text',
        placeholder: 'title',
        require: true,
        value: '',
    },
    description: {
        id: 'description',
        elemType: 'input',
        type: 'text',
        placeholder: 'description',
        require: true,
        value: '',
    },
    languages: {
        id: 'languages',
        elemType: 'select',
        options: [...Object.keys(Languages)],
        require: true
    },
    link: {
        id: 'link',
        elemType: 'input',
        type: 'text',
        placeholder: 'link to app',
        require: true,
        value: '',
    },
    github: {
        id: 'github',
        elemType: 'input',
        type: 'text',
        placeholder: 'github link',
        require: true,
        value: '',
    },
    video_src: {
        id: 'video_src',
        elemType: 'input',  
        type: 'text',
        placeholder: 'video link',
        require: true,
        value: '',
    },
    gif_src: {
        id: 'gif_src',
        elemType: 'input',
        type: 'text',
        placeholder: 'gif link',
        require: true,
        value: '',
    },
    desktop: {
        id: 'desktop',
        elemType: 'select',
        options : ['Yes', 'No'],
        require: true,
        value: 'Yes'
    },
    mobile: {   
        id: 'mobile',
        elemType: 'select',
        options : ['Yes', 'No'],
        require: true,
        value: 'Yes'
    }
}

const AddPortfolioItem: React.FunctionComponent = (): JSX.Element => {
    const [showForm, setShowForm] = React.useState<boolean>(false)

    const addItemToDatabase = (item: IPortfolioItem) => {
        const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items.json'
        const idToken: string = localStorage.getItem('idToken')!
        const tokenParam: string = `?auth=${idToken}`

        const newItem: any = {
            
        }

        fetch(baseURL + tokenParam, { method: 'put', body: newItem }).then(response => response.json()
            .then(data => {
                console.log(data)
            }))
    }

    const clickHandler = () => {
        setShowForm(true)
    }

    return (
        <div className={css.AddItemContainer}>
            <span className={css.AddItemButton} onClick={clickHandler}>add item <FontAwesomeIcon icon={icons.faPlus} className={css.AddItemIcon} /></span>
            <NewItemForm show={showForm} close={() => setShowForm(false)} add={addItemToDatabase} />
        </div>
    )
}

interface INewItemForm {
    show: boolean
    close: () => void
    add: (item: IPortfolioItem) => void
}

const NewItemForm: React.FunctionComponent<INewItemForm> = ({ show, close, add }): JSX.Element => {
    const [form, setForm] = React.useState<IForm>(initialForm)

    const changeHandler = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedForm: IForm = {
            ...form,
            [id]: {
                ...form[id],
                value: event.target.value
            }
        }
        setForm(updatedForm)
    }

    const addHandler = () => {
        const newItem: IPortfolioItem = {
            title: form.title.value,
            language: [Languages.React, Languages.TypeScript],
            description: form.description.value,
            link: form.link.value,
            githubLink: form.github.value,
            video_src: form.video_src.value,
            gif_src: form.gif_src.value,
            desktop: true,
            mobile: true
        }

        add(newItem)
    }
    
    const itemFormClasses = [
        css.ItemForm,
        show && css.show
    ].join(' ')

    return (
        <div className={itemFormClasses}>
            <FontAwesomeIcon className={css.FormCloseButton} icon={icons.faTimes} onClick={close} />
            { Object.keys(form).map((element: string) => {
                return (
                   <FormInput key={element} item={form[element]} change={changeHandler}  />
                )
            })}
            <div className={css.FormAddButton} onClick={addHandler}>
                <p>add</p>
            </div>
        </div>
    )
}

interface IFormInput {
    item: any
    change: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput: React.FunctionComponent<IFormInput> = React.memo( ({ item, change }): JSX.Element => {
    let content = undefined

    switch (item.elemType) {
        case 'input':
            content = (
                <input value={item.value} 
                    placeholder={item.placeholder} 
                    onChange={(e) => change(item.id, e)}
                    className={css.FormInput} />
            )
            break;
            
        case 'select':
            content = (
                <select className={css.FormSelect} id={item.id}>
                    {item.options.map((option: string) => {
                        return (
                            <option key={item.id + option} value={option}>{option}</option>
                        )
                    })}
                </select>
            )
            break;
    }

    return (
        <div className={css.FormInputContainer}>
            <p>{item.id}</p>
            { content }
        </div>
    )
})

export default Admin

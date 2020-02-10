import * as React from 'react'

import Auth from '../../containers/Auth/Auth'
import { CubeSpinner } from '../../components/UI/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'
import { IPortfolioItem } from '../../interfaces/interfaces'
import { IAuthContext, AuthContext, TAuthState, TDispatch } from '../../context/authContext'
import { Languages, IPortfolioContext, PortfolioContext, TPortfolioState, TPortfolioActionTypes } from '../../context/portfolioContext'

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

const Loading: React.FunctionComponent = (): JSX.Element => (
    <div className={css.Loading}>
        <CubeSpinner />
    </div>
)

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

interface IPortfolioItems {
    items?: IPortfolioItem[]
}

const PortfolioItems: React.FunctionComponent<IPortfolioItems> = ({ items }): JSX.Element => {
    return (
        <div className={css.ItemsContainer}>
            { items && items.map((item: IPortfolioItem) => {
                return (
                    <PortfolioItem key={item.title} {...item} />
                )
            })}
            <AddPortfolioItem />
        </div>
    )
}

const PortfolioItem: React.FunctionComponent<IPortfolioItem> = (props): JSX.Element => {
    
    const deleteHandler = () => {
        const baseURL: string = "https://joonajo-portfolio.firebaseio.com/items/"
        const itemParam: string = `${props.title}.json`
        const idToken: string = localStorage.getItem('idToken')!
        const tokenParam: string = `?auth=${idToken}`

        fetch(baseURL + itemParam + tokenParam, { method: 'delete' }).then(response => response.json())
            .then(data => {
                console.log('succesfully deleted', props.title)
            })
    }
    
    return (
        <div className={css.ItemContainer}>
            <div className={css.ItemMainContent}>
                <p>{props.title}</p>
            </div>
            <div className={css.ItemHoverContent}>
                <span> <FontAwesomeIcon icon={icons.faEdit} /> <p>edit</p> </span>
                <span onClick={deleteHandler}> <FontAwesomeIcon icon={icons.faTrash} /> <p>delete</p> </span>
            </div>  
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
        require: true,
        multiple: true
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
        value: 'Yes',
        multiple: false
    },
    mobile: {   
        id: 'mobile',
        elemType: 'select',
        options : ['Yes', 'No'],
        require: true,
        value: 'Yes',
        multiple: false
    }
}

const AddPortfolioItem: React.FunctionComponent = (): JSX.Element => {
    const [showForm, setShowForm] = React.useState<boolean>(false)
    const [sending, setSending] = React.useState<boolean>(false)

    const addItemToDatabase = (item: IPortfolioItem) => {
        setSending(true)
        const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items/'
        const title: string = item.title + ".json"
        const idToken: string = localStorage.getItem('idToken')!
        const tokenParam: string = `?auth=${idToken}`

        fetch(baseURL + title + tokenParam, { method: 'put', body: JSON.stringify(item) }).then(response => response.json()
            .then(data => {
                console.log(data)
                setSending(false)
                setShowForm(false)
            }))
    }

    const clickHandler = () => {
        setShowForm(true)
    }

    return (
        <div className={css.AddItemContainer}>
            <span className={css.AddItemButton} onClick={clickHandler}>add item <FontAwesomeIcon icon={icons.faPlus} className={css.AddItemIcon} /></span>
            <NewItemForm show={showForm} close={() => setShowForm(false)} add={addItemToDatabase} sending={sending}/>
        </div>
    )
}

interface INewItemForm {
    show: boolean
    sending: boolean
    close: () => void
    add: (item: IPortfolioItem) => void
}

const NewItemForm: React.FunctionComponent<INewItemForm> = ({ show, close, add, sending }): JSX.Element => {
    const [form, setForm] = React.useState<IForm>(initialForm)
    const [formHeight, setFormHeight] = React.useState<number>()
    const formRef: React.RefObject<HTMLFormElement> = React.useRef(null)

    React.useEffect(() => {
        if (formRef && formRef.current) {
            setFormHeight(formRef.current.getBoundingClientRect().height)
        }
    }, [formRef])

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
            desktop: form.desktop.value,
            mobile: form.mobile.value
        }

        add(newItem)
    }
    
    const itemFormStyles = [
        css.ItemForm,
        show && css.show
    ].join(' ')

    const backdropStyles = [
        css.FormBackdrop,
        show && css.show
    ].join(' ')

    return (
        <>
            <form className={itemFormStyles} ref={formRef}>
                { sending && 
                    <div className={css.Loading}>
                        <CubeSpinner />
                    </div>
                }
                <FontAwesomeIcon className={css.FormCloseButton} icon={icons.faTimes} onClick={close} />
                { Object.keys(form).map((element: string) => {
                    return (
                    <FormInput key={element} item={form[element]} change={changeHandler}  />
                    )
                })}
                <div className={css.FormAddButton} onClick={addHandler}>
                    <p>add</p>
                </div>
            </form>
            <div className={backdropStyles}></div>
        </>
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
                <select className={css.FormSelect} id={item.id} multiple={item.multiple}>
                    {item.options.map((option: string) => {
                        return (
                            <option key={item.id + option} value={option} className={css.SelectOption}>{option}</option>
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

import * as React from 'react'

import { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../icons/icons'

const css = require('./index.module.css')

const AdminPage: NextPage = (): JSX.Element => {
    const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false)

    const signInHandler = (email: string, password: string) =>  {
        console.log(email, password)
    }

    return (
        <div className={css.Main}>
            { !isSignedIn && <AuthForm signIn={signInHandler} /> }
        </div>
    )
}

interface IFormElement {
    id: string
    inputType: string
    value: string
    placeholder?: string
    require?: boolean
    className?: string
    icon? : { focus?: any, unfocus?: any }
}

interface IFormState {
    [email: string]: IFormElement
    password: IFormElement
}

const initialAuthFormState: IFormState = {
    email: {
        id: 'email',
        inputType: 'email',
        placeholder: 'email',
        require: true,
        value: '',
        className: css.EmailInput,
        icon: { focus: icons.faEnvelopeOpen, unfocus: icons.faEnvelope }
    },
    password: {
        id: 'password',
        inputType: 'password',
        placeholder: 'password',
        require: true,
        value: '',
        className: css.PasswordInput,
        icon: { focus: icons.faUnlock, unfocus: icons.faLock }
    },
}

interface IAuthForm {
    signIn: (email: string, password: string) => void
}

const AuthForm: React.FunctionComponent<IAuthForm> = ({ signIn }): JSX.Element => {
    const [formState, setFormState] = React.useState<IFormState>(initialAuthFormState)

    React.useEffect(() => {
        const keyHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                signInHandler()
            }
        }

        window.addEventListener('keydown', keyHandler, true)

        return () => window.removeEventListener('keydown', keyHandler, true)
    }, [formState])

    const changeHandler = (elemKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFormState: IFormState = {
            ...formState,
            [elemKey]: {
                ...formState[elemKey],
                value: event.target.value
            }
        }
        setFormState(updatedFormState)
    }

    const signInHandler = () => {
        signIn(formState.email.value, formState.password.value)
    }

    return (
        <div className={css.AuthFormContainer}>
            <h2 className={css.FormTitle}>Admin Auth</h2>
            <form className={css.AuthForm}>
                { Object.keys(formState).map((elementKey: string) => {
                    return (
                        <InputComponent key={elementKey} {...formState[elementKey]} changed={changeHandler} />
                    )
                })}
            </form>
            <div className={css.SubmitButton} onClick={signInHandler}>
                <p>Sign In</p>
                <FontAwesomeIcon icon={icons.faSignInAlt} />
            </div>
        </div>
    )
}

interface IInputComponent extends IFormElement {
    changed: (elemKey: string, event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: React.FunctionComponent<IInputComponent> = (props): JSX.Element => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false)

    const iconClasses = [
        css.InputIcon,
        isFocused && css.focus
    ].join(' ')

    return (
        <div className={css.InputContainer}>
            { props.icon &&  
                <div className={css.IconContainer}>
                    <FontAwesomeIcon className={iconClasses} icon={props.icon?.unfocus} />
                </div>
            }
            <input className={props.className} 
                placeholder={props.placeholder}
                value={props.value} 
                type={props.inputType}
                onChange={(e) => props.changed(props.id, e)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)} /> 
        </div>
    )
}

export default AdminPage
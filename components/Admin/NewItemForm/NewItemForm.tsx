import * as React from 'react'

import { Languages, IPortfolioContext, PortfolioContext, TPortfolioActionTypes } from '../../../context/portfolioContext'
import { IPortfolioItem } from '../../../interfaces/interfaces'
import { CubeSpinner } from '../../UI/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../icons/icons'

const css = require('./NewItemForm.module.css')

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
        elemType: 'textarea',
        type: 'text',
        placeholder: 'description',
        require: true,
        value: '',
    },
    languages: {
        id: 'languages',
        elemType: 'select',
        options: [...Object.keys(Languages)],
        selected: [],
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

interface INewItemForm {
    show: boolean
    sending: boolean
    close: () => void
    add: (item: IPortfolioItem) => void
}

const NewItemForm: React.FunctionComponent<INewItemForm> = ({ show, close, add, sending }): JSX.Element => {
    const [form, setForm] = React.useState<IForm>(initialForm)

    const changeHandler = (id: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let updatedForm: IForm = { ...form }
        if (id === 'languages') {
            let updatedSelectedOptions: string[] = [...form[id].selected]
            if (updatedSelectedOptions.includes(event.target.value)) updatedSelectedOptions = updatedSelectedOptions.filter(option => option !== event.target.value)
            else updatedSelectedOptions.push(event.target.value)
            updatedForm = {
                ...form,
                [id]: {
                    ...form[id],
                    selected: updatedSelectedOptions
                }
            }
        } else {
            updatedForm = {
                ...form,
                [id]: {
                    ...form[id],
                    value: event.target.value
                }
            }
        }
        setForm(updatedForm)
    }

    const addHandler = () => {
        const newItem: IPortfolioItem = {
            title: form.title.value,
            language: [...form.languages.selected],
            description: form.description.value,
            link: form.link.value,
            githubLink: form.github.value,
            video_src: form.video_src.value,
            gif_src: form.gif_src.value,
            desktop: form.desktop.value === 'Yes',
            mobile: form.mobile.value === 'Yes,'
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
            <form className={itemFormStyles}>
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
    change: (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
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

        case 'textarea':
            content = (
                <textarea value={item.value}
                    onChange={(e) => change(item.id, e)}
                    placeholder={item.placeholder} 
                    className={css.FormInput}
                    rows={5} />
            )
            break;
            
        case 'select':
            content = (
                <select className={css.FormSelect} onChange={(e) => change(item.id, e)} id={item.id} multiple={item.multiple}>
                    {item.options.map((option: string) => {
                        return (
                            <option key={item.id + option} value={option} className={[css.SelectOption, item.selected?.includes(option) && css.selected].join(' ')}>{option}</option>
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

export default NewItemForm
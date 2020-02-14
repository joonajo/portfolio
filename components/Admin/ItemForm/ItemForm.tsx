import * as React from 'react'

import { IPortfolioItem } from '../../../interfaces/interfaces'
import { CubeSpinner } from '../../UI/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../icons/icons'
import { IForm, initialForm, updateEditForm, formTypes } from '../../../form/form'

const css = require('./ItemForm.module.css')

interface IItemForm {
    show: boolean
    sending: boolean
    item?: IPortfolioItem
    type: string
    close(): void
    add(item: IPortfolioItem): void
}

const ItemForm: React.FunctionComponent<IItemForm> = ({ show, sending, item, close, add, type }): JSX.Element => {
    const [form, setForm] = React.useState<IForm>(initialForm)

    React.useEffect(() => {
        if (item) {
            // update each field manually cus we bad
            const updatedForm: IForm = updateEditForm(item)
            setForm(updatedForm)     
        }   
    }, [item])

    const optionClickHandler = (id: string, name: string) => {
        let updatedForm: IForm = { ...form }
        if (id === 'language') {
            updatedForm = {
                ...form,
                [id]: {
                    ...form[id],
                    options: {
                        ...form[id].options,
                        [name]: {
                            ...form[id].options[name],
                            selected: !form[id].options[name].selected,
                        }
                    }
                }
            }
        } else {
            updatedForm = {
                ...form,
                [id]: {
                    ...form[id],
                    options: {
                        Yes: {
                            selected: name === 'Yes',
                        },
                        No: {
                            selected: name === 'No',
                        }
                    }
                }
            }
        }
        setForm(updatedForm)
    }

    const changeHandler = (id: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let updatedForm: IForm = { ...form }
        updatedForm = {
            ...form,
            [id]: {
                ...form[id],
                value: event.target.value
            }
        }
        setForm(updatedForm)
    }

    const addHandler = () => {
        let selectedLanguages = Object.keys(form.language.options).filter(option => form.language.options[option].selected)
        if (selectedLanguages.length === 0) selectedLanguages = ['React']

        const newItem: IPortfolioItem = {
            title: form.title.value,
            language: selectedLanguages,
            description: form.description.value,
            link: form.link.value,
            githubLink: form.github.value,
            video_src: form.video_src.value,
            preview_src: form.preview_src.value,
            gif_src: form.gif_src.value,
            desktop: form.desktop.options.Yes.selected,
            mobile: form.mobile.options.Yes.selected,
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
                        <FormInput key={element} type={type} item={form[element]} change={changeHandler} clickOption={optionClickHandler} />
                    )
                })}
                <div className={css.FormAddButton} onClick={addHandler}>
                    <p>{type}</p>
                </div>
            </form>
            <div className={backdropStyles}></div>
        </>
    )
}

interface IFormInput {
    type: string
    item: any
    change: (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
    clickOption: (id: string, name: string) => void
}

const FormInput: React.FunctionComponent<IFormInput> = React.memo( ({ type, item, change, clickOption }): JSX.Element => {
    let content = undefined

    switch (item.elemType) {
        case 'input':
            content = (
                <input value={item.value} 
                    disabled={type === formTypes.EDIT && item.id === 'title'}
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
                <div className={css.Select}>
                    { Object.keys(item.options).map((option: any) => {
                        const selected: boolean = item.options[option].selected
                        return (
                            <div key={item.id + option} 
                                className={[css.Option, selected && css.selected].join(' ')} 
                                onClick={() => clickOption(item.id, option)}>{option}</div>
                        )
                    })}
                </div>
            )
            break;
    }

    return (
        <div className={css.FormInputContainer}>
            <p className={css.FormInputTitle}>{item.id}</p>
            { content }
        </div>
    )
})

export default ItemForm
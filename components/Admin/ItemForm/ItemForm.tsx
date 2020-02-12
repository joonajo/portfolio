import * as React from 'react'

import { IPortfolioItem } from '../../../interfaces/interfaces'
import { CubeSpinner } from '../../UI/Spinner/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../icons/icons'

const css = require('./ItemForm.module.css')

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
        options: {
            React: {
                selected: false,
            },
            TypeScript: {
                selected: false,
            },
            JavaScript: {
                selected: false,
            },
            Cpp: {
                selected: false
            },
            NextJS: {
                selected: false
            }
        },
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
        options : {
            Yes: {
                selected: true,
            },
            No: {
                selected: false
            },
        },        
        require: true,
    },
    mobile: {   
        id: 'mobile',
        elemType: 'select',
        options : {
            Yes: {
                selected: true,
            },
            No: {
                selected: false
            },
        }, 
        require: true,
    }
}

interface IItemForm {
    show: boolean
    sending: boolean
    close: () => void
    add: (item: IPortfolioItem) => void
}

const ItemForm: React.FunctionComponent<IItemForm> = ({ show, close, add, sending }): JSX.Element => {
    const [form, setForm] = React.useState<IForm>(initialForm)

    const optionClickHandler = (id: string, name: string) => {
        let updatedForm: IForm = { ...form }
        if (id === 'languages') {
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
        const selectedLanguages = Object.keys(form.languages.options).filter(option => form.languages.options[option].selected)

        const newItem: IPortfolioItem = {
            title: form.title.value,
            language: selectedLanguages,
            description: form.description.value,
            link: form.link.value,
            githubLink: form.github.value,
            video_src: form.video_src.value,
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
                        <FormInput key={element} item={form[element]} change={changeHandler} clickOption={optionClickHandler} />
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
    clickOption: (id: string, name: string) => void
}

const FormInput: React.FunctionComponent<IFormInput> = React.memo( ({ item, change, clickOption }): JSX.Element => {
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
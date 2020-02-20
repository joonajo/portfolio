import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formTypes } from '../../../form/form'
import { icons } from '../../../icons/icons'
import { IAuthContext, AuthContext } from '../../../context/authContext'
import { IPortfolioItem } from '../../../interfaces/interfaces'
import ItemForm from '../ItemForm/ItemForm'
import Loading from '../../UI/Loading/Loading'

const css = require('./AddItem.module.css')

type TProps = {
    showForm: boolean
    sending: boolean
    add(item: IPortfolioItem): void
    setShowForm(arg: boolean): void
}

const AddPortfolioItem: React.FunctionComponent<TProps> = ({ showForm, setShowForm, add, sending }): JSX.Element => {

    const clickHandler = () => {
        setShowForm(true)
    }

    return (
        <>
            <div className={css.AddItemContainer}>
                <span className={css.AddItemButton} onClick={clickHandler}>add item <FontAwesomeIcon icon={icons.faPlus} className={css.AddItemIcon} /></span>
                <ItemForm type={formTypes.ADD} show={showForm} close={() => setShowForm(false)} add={add} sending={sending}/>
            </div>
            <Loading show={sending} transparent fadeout /> 
        </>
    )
}

export default AddPortfolioItem
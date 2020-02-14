import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formTypes } from '../../../form/form'
import { icons } from '../../../icons/icons'
import { IAuthContext, AuthContext } from '../../../context/authContext'
import { IPortfolioItem } from '../../../interfaces/interfaces'
import ItemForm from '../ItemForm/ItemForm'
import Loading from '../../UI/Loading/Loading'

const css = require('./AddItem.module.css')

const AddPortfolioItem: React.FunctionComponent = (): JSX.Element => {
    const [showForm, setShowForm] = React.useState<boolean>(false)
    const [sending, setSending] = React.useState<boolean>(false)
    const authContext: IAuthContext = React.useContext(AuthContext)

    const addItemToDatabase = (item: IPortfolioItem) => {
        if (authContext.state.signedIn) {
            setSending(true)
            const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items/'
            const title: string = item.title + ".json"
            const tokenParam: string = `?auth=${authContext.state.idToken}`
    
            fetch(baseURL + title + tokenParam, { method: 'put', body: JSON.stringify(item) }).then(response => response.json()
                .then(data => {
                    setSending(false)
                    setShowForm(false)
                }))
        }
    }

    const clickHandler = () => {
        setShowForm(true)
    }

    console.log(sending)

    return (
        <>
            <div className={css.AddItemContainer}>
                <span className={css.AddItemButton} onClick={clickHandler}>add item <FontAwesomeIcon icon={icons.faPlus} className={css.AddItemIcon} /></span>
                <ItemForm type={formTypes.ADD} show={showForm} close={() => setShowForm(false)} add={addItemToDatabase} sending={sending}/>
            </div>
            <Loading show={sending} transparent fadeout /> 
        </>
    )
}

export default AddPortfolioItem
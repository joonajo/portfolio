import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../icons/icons'
import NewItemForm from '../ItemForm/ItemForm'
import { IPortfolioItem } from '../../../interfaces/interfaces'
import { IAuthContext, AuthContext } from '../../../context/authContext'
import { IPortfolioContext, PortfolioContext, TPortfolioActionTypes } from '../../../context/portfolioContext'

const css = require('./AddNewItem.module.css')

const AddPortfolioItem: React.FunctionComponent = (): JSX.Element => {
    const [showForm, setShowForm] = React.useState<boolean>(false)
    const [sending, setSending] = React.useState<boolean>(false)
    const authContext: IAuthContext = React.useContext(AuthContext)
    const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext)

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
            
        portfolioContext.dispatch!({ type: TPortfolioActionTypes.ADD_ITEM, payload: item })
        }
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

export default AddPortfolioItem
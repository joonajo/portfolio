import * as React from 'react'

import { formTypes } from '../../../form/form'
import ItemForm from '../ItemForm/ItemForm'
import { IPortfolioItem } from '../../../interfaces/interfaces'
import { IAuthContext, AuthContext } from '../../../context/authContext'
import { IPortfolioContext, PortfolioContext, TPortfolioActionTypes } from '../../../context/portfolioContext'

const css = require('./EditItem.module.css')

interface IEditItem {
    show: boolean
    item: IPortfolioItem
    close(): void
}

const EditItem: React.FunctionComponent<IEditItem> = ({ show, item, close }): JSX.Element => {
    const [sending, setSending] = React.useState<boolean>(false)
    const authContext: IAuthContext = React.useContext(AuthContext)
    const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext)

    const editItem = (item: IPortfolioItem) => {
        if (authContext.state.signedIn) {
            setSending(true)
            const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items/'
            const title: string = item.title + ".json"
            const tokenParam: string = `?auth=${authContext.state.idToken}`
    
            fetch(baseURL + title + tokenParam, { method: 'put', body: JSON.stringify(item) }).then(response => response.json()
                .then(data => {
                    setSending(false)
                }))
            close()
        }
    }

    const containerStyles = [
        css.EditItemContainer,
        show && css.show
    ].join(' ')

    return (
        <div className={containerStyles}>
            <ItemForm type={formTypes.EDIT} show={show} sending={sending} item={item} close={close} add={editItem} />
        </div>
    )
}

export default EditItem
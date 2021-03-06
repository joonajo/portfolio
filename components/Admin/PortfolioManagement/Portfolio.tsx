import * as React from 'react'

const css = require('./Portfolio.module.css')

import AddPortfolioItem from '../AddNewItem/AddItem'
import { IPortfolioItem } from '../../../interfaces/interfaces'
import { IAuthContext, AuthContext } from '../../../context/authContext'
import { IPortfolioContext, PortfolioContext, TPortfolioActionTypes } from '../../../context/portfolioContext'
import PortfolioItem from './Item/Item'
import Loading from '../../UI/Loading/Loading'

interface IPortfolioItems {
    items?: IPortfolioItem[]
}

const PortfolioItems: React.FunctionComponent<IPortfolioItems> = ({ items }): JSX.Element => {
    const [sending, setSending] = React.useState<boolean>(false)
    const [showAddForm, setShowAddForm] = React.useState<boolean>(false)
    const authContext: IAuthContext = React.useContext(AuthContext)
    const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext)

    const addItem = (item: IPortfolioItem) => {
        if (authContext.state.signedIn) {
            setSending(true)
            const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items/'
            const title: string = item.title + ".json"
            const tokenParam: string = `?auth=${authContext.state.idToken}`
    
            fetch(baseURL + title + tokenParam, { method: 'put', body: JSON.stringify(item) }).then(response => response.json()
                .then(data => {
                    setSending(false)
                    setShowAddForm(false)
                    portfolioContext.dispatch!({ type: TPortfolioActionTypes.ADD_ITEM, payload: item })
                }))
        }
    }

    const deleteItem = (itemTitle: string) => {
        if (authContext.state.signedIn) {
            setSending(true)
            const baseURL: string = "https://joonajo-portfolio.firebaseio.com/items/"
            const itemParam: string = `${itemTitle}.json`
            const tokenParam: string = `?auth=${authContext.state.idToken}`
    
            fetch(baseURL + itemParam + tokenParam, { method: 'delete' }).then(response => response.json())
                .then(data => {
                    console.log('succesfully deleted', itemTitle)
                    setSending(false)
                    portfolioContext.dispatch!({ type: TPortfolioActionTypes.DELETE_ITEM, payload: itemTitle })
                })
        }
    }
    
    return (
        <>
            <div className={css.ItemsContainer}>
                { items && items.map((item: IPortfolioItem) => {
                    return (
                        <PortfolioItem key={item.title} item={item} deleteItem={deleteItem} />
                    )
                })}
                <AddPortfolioItem showForm={showAddForm} setShowForm={setShowAddForm} add={addItem} sending={sending} />
            </div>
            <Loading show={sending} transparent fadeout />
        </>
    )
}

export default PortfolioItems
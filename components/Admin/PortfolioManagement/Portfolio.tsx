import * as React from 'react'

const css = require('./Portfolio.module.css')

import { IPortfolioItem } from '../../../interfaces/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../icons/icons'
import AddPortfolioItem from '../AddNewItem/AddNewItem'
import { IAuthContext, AuthContext } from '../../../context/authContext'
import { IPortfolioContext, PortfolioContext, TPortfolioActionTypes } from '../../../context/portfolioContext'

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
    const authContext: IAuthContext = React.useContext(AuthContext)
    const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext)

    const deleteHandler = () => {
        if (authContext.state.signedIn) {
            const baseURL: string = "https://joonajo-portfolio.firebaseio.com/items/"
            const itemParam: string = `${props.title}.json`
            const tokenParam: string = `?auth=${authContext.state.idToken}`
    
            fetch(baseURL + itemParam + tokenParam, { method: 'delete' }).then(response => response.json())
                .then(data => {
                    console.log('succesfully deleted', props.title)
                })

            portfolioContext.dispatch!({ type: TPortfolioActionTypes.DELETE_ITEM, payload: props.title })
        }
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

export default PortfolioItems
import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../../icons/icons'
import { IPortfolioItem } from '../../../../interfaces/interfaces'
import EditItem from '../../EditItem/EditItem'

const css = require('./Item.module.css')

interface IItemComponent {
    item: IPortfolioItem
    deleteItem: (title: string) => void
}

const PortfolioItem: React.FunctionComponent<IItemComponent> = ({ item, deleteItem }): JSX.Element => {
    const [confirmDelete, setConfirmDelete] = React.useState<boolean>(false)
    const [editItem, setEditItem] = React.useState<boolean>(false)

    const deleteHandler = () => {
        setConfirmDelete(true)
    }

    const editItemHandler = () => {
        setEditItem(!editItem)
    }
    
    return (
        <>
            <div className={css.ItemContainer}>
                <div className={css.ItemMainContent}>
                    <p>{item.title}</p>
                </div>
                <div className={css.ItemHoverContent}>
                    <div onClick={editItemHandler}> <FontAwesomeIcon icon={icons.faEdit} /> <p>edit</p> </div>
                    <div onClick={deleteHandler}> <FontAwesomeIcon icon={icons.faTrash} /> <p>delete</p> </div>
                    { confirmDelete && <ConfirmDelete confirm={() => deleteItem(item.title)} cancel={() => setConfirmDelete(false)} /> }
                </div>  
            </div>
            <EditItem show={editItem} item={item} close={editItemHandler} />
        </>
    )
}

interface IConfirmDeleteComponent {
    confirm(): void
    cancel(): void
}

const ConfirmDelete: React.FunctionComponent<IConfirmDeleteComponent> = ({ confirm, cancel }): JSX.Element => {
    return (
        <div className={css.ConfirmDeleteContainer}>
            <h2 className={css.ConfirmDeleteText}>Confirm Delete</h2>
            <div className={css.ConfirmDeleteButtons}>
                <p onClick={confirm}>Delete</p>
                <p onClick={cancel}>Cancel</p>
            </div>
        </div>
    )
}

export default PortfolioItem
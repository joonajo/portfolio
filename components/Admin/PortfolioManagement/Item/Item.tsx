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
    const [editItem, setEditItem] = React.useState<boolean>(false)

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
                    <div className={css.Button} onClick={editItemHandler}> <FontAwesomeIcon icon={icons.faEdit} /> <p>edit</p> </div>
                    <DeleteButton deleteItem={() => deleteItem(item.title)} />
                </div>  
            </div>
            <EditItem show={editItem} item={item} close={editItemHandler} />
        </>
    )
}

interface IDeleteButton {
    deleteItem(): void
}

const DeleteButton: React.FunctionComponent<IDeleteButton> = ({ deleteItem }): JSX.Element => {
    const [showConfirm, setShowConfirm] = React.useState<boolean>(false)

    const confirmHandler = () => {
        deleteItem()
        setShowConfirm(false)
    }

    return (
        <>
            { !showConfirm && <div className={css.Button} onClick={() => setShowConfirm(true)}> <FontAwesomeIcon icon={icons.faTrash} /> <p>delete</p>  </div> }
            { showConfirm && 
                <div className={css.ConfirmDeleteContainer}>
                    <p className={css.ConfirmDelete} onClick={confirmHandler}>yes</p>
                    <p className={css.CancelDelete} onClick={() => setShowConfirm(false)}>no</p>
                </div> 
            }
        </>
    )
}

export default PortfolioItem
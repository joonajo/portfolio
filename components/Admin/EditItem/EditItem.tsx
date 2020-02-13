import * as React from 'react'

import ItemForm, { formTypes } from '../ItemForm/ItemForm'
import { IPortfolioItem } from '../../../interfaces/interfaces'

const css = require('./EditItem.module.css')

interface IEditItem {
    show: boolean
    item: IPortfolioItem
    close(): void
}

const EditItem: React.FunctionComponent<IEditItem> = ({ show, item, close }): JSX.Element => {
    const [sending, setSending] = React.useState<boolean>(false)

    const editItem = (item: IPortfolioItem) => {

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
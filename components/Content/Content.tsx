import React from 'react'
import { portfolioItems } from '../../portfolio/portfolio'
import { IPortfolioItem } from '../../interfaces/interfaces'
import Item from '../Item/Item'

const css = require('./Content.module.css')

const Content: React.FunctionComponent = (): JSX.Element => {

    return (
        <div className={css.Content}>
            {portfolioItems.map((item: IPortfolioItem) => {
                return <Item {...item} />
            })}
        </div>
    )
}

export default Content
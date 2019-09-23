import React from 'react'
import dynamic from 'next/dynamic'

import { portfolioItems } from '../../portfolio/portfolio'
import { IPortfolioItem } from '../../interfaces/interfaces'

const Item = dynamic(() => import('../Item/Item'))

const css = require('./Content.module.css')

const Content: React.FunctionComponent = (): JSX.Element => {

    return (
        <div className={css.Content}>
            <h2 className={css.Title}>Portfolio</h2>
            {portfolioItems.map((item: IPortfolioItem) => {
                return <Item key={item.title} {...item} />
            })}
        </div>
    )
}

export default Content
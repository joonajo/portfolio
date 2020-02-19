import React from 'react'
import dynamic from 'next/dynamic'

import { IPortfolioItem } from '../../interfaces/interfaces'
import { IPortfolioContext, PortfolioContext, TPortfolioState } from '../../context/portfolioContext'

const Item = dynamic(() => import('../Item/Item'))

const css = require('./Content.module.css')

const Content: React.FunctionComponent = (): JSX.Element => {
    const portfolioContext: IPortfolioContext = React.useContext(PortfolioContext)
    const portfolioState: TPortfolioState = portfolioContext.state
    
    return (
        <div className={css.Content}>
            <h2 className={css.Title}>Portfolio</h2>
            {portfolioState.items.map((item: IPortfolioItem) => {
                return <Item key={item.title} {...item} />
            })}
        </div>
    )
}

export default Content
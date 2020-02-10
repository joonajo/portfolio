import React from 'react'
import { IPortfolioItem } from '../interfaces/interfaces'
import { TDispatch } from './authContext'

export type TPortfolioState = {
    items: IPortfolioItem[]
}

export const Languages = {
    React: 'React',
    TypeScript: 'TypeScript',
    JavaScript: 'JavaScript',
    Cpp: 'C++',
    NextJS: 'NextJS',
}

export enum TPortfolioActionTypes {
    SET_ITEMS = "SET_ITEMS",
    EDIT_ITEM = "EDIT_ITEM",
    DELETE_ITEM = "DELETE_ITEM",
    ADD_ITEM = "ADD_ITEM"
}

export type TPortfolioActions = 
| ({ type: TPortfolioActionTypes.SET_ITEMS, payload: IPortfolioItem[] })
| ({ type: TPortfolioActionTypes.DELETE_ITEM, payload: string })
| ({ type: TPortfolioActionTypes.EDIT_ITEM, payload: string })
| ({ type: TPortfolioActionTypes.ADD_ITEM, payload: IPortfolioItem })

export const initialPortfolioState: TPortfolioState = {
    items: []
}

const setItems = (state: TPortfolioState, action: TPortfolioActions): TPortfolioState => {
    if (action.type !== TPortfolioActionTypes.SET_ITEMS) return { ...state }

    return {
        ...state,
        items: action.payload
    }
}

const addItem = (state: TPortfolioState, action: TPortfolioActions): TPortfolioState => {
    if (action.type !== TPortfolioActionTypes.ADD_ITEM) return { ...state }

    const updatedItems: IPortfolioItem[] = [...state.items]
    updatedItems.push(action.payload)

    return {
        ...state,
        items: updatedItems
    }
}

const deleteItem = (state: TPortfolioState, action: TPortfolioActions): TPortfolioState => {
    if (action.type !== TPortfolioActionTypes.DELETE_ITEM) return { ...state }

    const updatedItems: IPortfolioItem[] = [...state.items].filter(item => item.title !== action.payload)

    return {
        ...state,
        items: updatedItems
    }
}

export const portfolioReducer = (state: TPortfolioState = initialPortfolioState, action: TPortfolioActions): TPortfolioState => {
    switch (action.type) {
        case TPortfolioActionTypes.SET_ITEMS:
            return setItems(state, action)

        case TPortfolioActionTypes.DELETE_ITEM:
            return deleteItem(state, action)

        case TPortfolioActionTypes.EDIT_ITEM:
            return { ...state }
    
        case TPortfolioActionTypes.ADD_ITEM:
            return addItem(state, action)
            
        default:
            return { ...state }
    }
}

export interface IPortfolioContext {
    state: TPortfolioState,
    dispatch?: TDispatch
}

export const PortfolioContext = React.createContext<IPortfolioContext>({ state: initialPortfolioState })

interface IPortfolioProvider {
    children: any
}

export const PortfolioProvider: React.FunctionComponent<IPortfolioProvider> = ({ children }) => {
    const[state, dispatch] = React.useReducer(portfolioReducer, initialPortfolioState)

    return (
        <PortfolioContext.Provider value={{state, dispatch}}>
            {children}
        </PortfolioContext.Provider>
    )
}
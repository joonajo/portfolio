import React from 'react'

export type TSetShow = React.Dispatch<React.SetStateAction<any>>

export interface IToolbar {
    show: boolean,
    setShow?: TSetShow
}

export const initalToolbarState: IToolbar = {
    show: false
}

export const ToolbarContext = React.createContext<IToolbar>(initalToolbarState)

interface IToolbarProvider {
    children: any
}

export const ToolbarProvider: React.FunctionComponent<IToolbarProvider> = ({ children }) => {
    const[show, setShow] = React.useState(false)


    return (
        <ToolbarContext.Provider value={{show, setShow}}>
            {children}
        </ToolbarContext.Provider>
    )
}
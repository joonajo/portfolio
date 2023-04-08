import React, { useContext } from 'react';

import { IPortfolioItem } from '../interfaces/interfaces';

export type TPortfolioState = {
  items: IPortfolioItem[];
};

export const Languages = {
  React: 'React',
  TypeScript: 'TypeScript',
  JavaScript: 'JavaScript',
  Cpp: 'C++',
  NextJS: 'NextJS',
};

export enum TPortfolioActionTypes {
  SET_ITEMS = 'SET_ITEMS',
  EDIT_ITEM = 'EDIT_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  ADD_ITEM = 'ADD_ITEM',
}

export type TPortfolioActions =
  | { type: TPortfolioActionTypes.SET_ITEMS; payload: IPortfolioItem[] }
  | { type: TPortfolioActionTypes.DELETE_ITEM; payload: string }
  | { type: TPortfolioActionTypes.EDIT_ITEM; payload: string }
  | { type: TPortfolioActionTypes.ADD_ITEM; payload: IPortfolioItem };

export const initialPortfolioState: TPortfolioState = {
  items: [],
};

const sortItems = (itemA: IPortfolioItem, itemB: IPortfolioItem) => itemA.order - itemB.order;

const setItems = (state: TPortfolioState, action: TPortfolioActions): TPortfolioState => {
  if (action.type !== TPortfolioActionTypes.SET_ITEMS) {
    return { ...state };
  }

  const sortedItems: IPortfolioItem[] = [...action.payload].sort(sortItems);

  return {
    ...state,
    items: sortedItems,
  };
};

const addItem = (state: TPortfolioState, action: TPortfolioActions): TPortfolioState => {
  if (action.type !== TPortfolioActionTypes.ADD_ITEM) {
    return { ...state };
  }

  const updatedItems: IPortfolioItem[] = [...state.items];
  updatedItems.push(action.payload);
  updatedItems.sort(sortItems);

  return {
    ...state,
    items: updatedItems,
  };
};

const deleteItem = (state: TPortfolioState, action: TPortfolioActions): TPortfolioState => {
  if (action.type !== TPortfolioActionTypes.DELETE_ITEM) {
    return { ...state };
  }

  const updatedItems: IPortfolioItem[] = [...state.items].filter(item => item.title !== action.payload);

  return {
    ...state,
    items: updatedItems,
  };
};

const editItem = (state: TPortfolioState, action: TPortfolioActions): TPortfolioState => {
  if (action.type !== TPortfolioActionTypes.EDIT_ITEM) {
    return { ...state };
  }

  return {
    ...state,
  };
};

export const portfolioReducer = (
  state: TPortfolioState = initialPortfolioState,
  action: TPortfolioActions,
): TPortfolioState => {
  switch (action.type) {
    case TPortfolioActionTypes.SET_ITEMS:
      return setItems(state, action);

    case TPortfolioActionTypes.DELETE_ITEM:
      return deleteItem(state, action);

    case TPortfolioActionTypes.EDIT_ITEM:
      return editItem(state, action);

    case TPortfolioActionTypes.ADD_ITEM:
      return addItem(state, action);

    default:
      return { ...state };
  }
};

export type IPortfolioContext = {
  state: TPortfolioState;
  dispatch: React.Dispatch<TPortfolioActions>;
};

export const PortfolioContext = React.createContext<IPortfolioContext | undefined>(undefined);

type IPortfolioProvider = {
  children: any;
};

export const PortfolioProvider: React.FunctionComponent<IPortfolioProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(portfolioReducer, initialPortfolioState);

  return <PortfolioContext.Provider value={{ state, dispatch }}>{children}</PortfolioContext.Provider>;
};

export const usePorftolioContext = () => {
  const portfolioContext = useContext(PortfolioContext);

  if (!portfolioContext?.state || !portfolioContext?.dispatch) {
    throw new Error('usePortfolioContext used outside of a provider!');
  }

  return { state: portfolioContext.state, dispatch: portfolioContext.dispatch };
};

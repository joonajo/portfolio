import axios from 'axios';

import { GetPortfolioItemsResponse, PortfolioItem } from '../types/types';

const basePortfolioUrl = 'https://joonajo-portfolio.firebaseio.com';

const agent = axios.create({
  baseURL: basePortfolioUrl,
});

export const getPortfolioItems = () =>
  agent.get<GetPortfolioItemsResponse>('/items.json').then(response => response.data);

export const addPortfolioItem = (itemToAdd: PortfolioItem, authToken: string) =>
  agent.put(`/items/${itemToAdd.title}json?auth=${authToken}`, { itemToAdd }).then(response => response.data);

export const editPortfolioItem = (editedItem: PortfolioItem, authToken: string) =>
  agent.put(`/items/${editedItem.title}json?auth=${authToken}`, { editedItem }).then(response => response.data);

export const deletePortfolioItem = (itemToDelete: PortfolioItem, authToken: string) =>
  agent.delete(`/items/${itemToDelete.title}json?auth=${authToken}`).then(response => response);

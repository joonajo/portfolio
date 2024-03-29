import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { useAuthContext } from '../context/authContext';
import { PortfolioItem } from '../types';

const basePortfolioUrl = 'https://joonajo-portfolio.firebaseio.com/items';
const fetchPortfolioUrl = `${basePortfolioUrl}.json`;

export const usePortfolioData = () => {
  const { state: authState } = useAuthContext();
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  const {
    data,
    isFetching: loading,
    error,
    refetch: refetchItems,
  } = useQuery<{ [key: string]: PortfolioItem }>(
    fetchPortfolioUrl,
    () => fetch(fetchPortfolioUrl, { method: 'get' }).then(response => response.json()),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      onSuccess: data => {
        const itemArray = Object.keys(data).map(key => data[key]);
        return itemArray;
      },
    },
  );

  const {
    mutate: addPortfolioItem,
    isLoading: addPortfolioItemLoading,
    error: addPortfolioItemError,
  } = useMutation(
    [basePortfolioUrl, 'addItem'],
    (newItem: PortfolioItem) => {
      const url = `${basePortfolioUrl}/${newItem.title}json?auth=${authState.idToken}`;

      return fetch(url, { method: 'put', body: JSON.stringify(newItem) }).then(response => response.json());
    },
    {
      onSuccess: () => refetchItems(),
    },
  );

  const {
    mutate: deletePortfolioItem,
    isLoading: deletePortfolioItemLoading,
    error: deletePortfolioItemError,
  } = useMutation(
    [basePortfolioUrl, 'deleteItem'],
    (itemToDelete: PortfolioItem) => {
      const url = `${basePortfolioUrl}/${itemToDelete.title}json?auth=${authState.idToken}`;

      return fetch(url, { method: 'delete' });
    },
    {
      onSuccess: () => refetchItems(),
    },
  );

  const {
    mutateAsync: editPortfolioItem,
    isLoading: editPortfolioItemLoading,
    error: editPortfolioItemError,
  } = useMutation(
    [basePortfolioUrl, 'editItem'],
    (editedItem: PortfolioItem) => {
      const url = `${basePortfolioUrl}/${editedItem.title}json?auth=${authState.idToken}`;

      return fetch(url, { method: 'put', body: JSON.stringify(editedItem) }).then(response => response.json());
    },
    {
      onSuccess: () => refetchItems(),
    },
  );

  useEffect(() => {
    if (!!data) {
      setPortfolioItems(
        Object.keys(data)
          .map(key => data[key])
          .sort((a, b) => a.order - b.order),
      );
    }
  }, [data]);

  return {
    portfolioData: portfolioItems,
    loadingPortfolioData: loading,
    portfolioDataError: error,
    addPortfolioItem,
    addPortfolioItemLoading,
    addPortfolioItemError,
    deletePortfolioItem,
    deletePortfolioItemLoading,
    deletePortfolioItemError,
    editPortfolioItem,
    editPortfolioItemLoading,
    editPortfolioItemError,
  };
};

import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { addPortfolioItem, deletePortfolioItem, editPortfolioItem, getPortfolioItems } from '../apis/apis';
import { useAuthContext } from '../context/authContext';
import { PortfolioItem } from '../types';

export const usePortfolioData = () => {
  const { state: authState } = useAuthContext();
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  const {
    data,
    isFetching: loading,
    error,
    refetch: refetchItems,
  } = useQuery(['get-portfolio-items'], () => getPortfolioItems(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    onSuccess: data => {
      const itemArray = Object.keys(data).map(key => data[key]);
      return itemArray;
    },
  });

  const {
    mutate: executeAddPortfolioItem,
    isLoading: executeAddPortfolioItemLoading,
    error: executeAddPortfolioItemError,
  } = useMutation(
    ['add-portfolio-item'],
    (newItem: PortfolioItem) => addPortfolioItem(newItem, authState.idToken ?? ''),
    {
      onSuccess: () => refetchItems(),
    },
  );

  const {
    mutate: executeDeletePortfolioItem,
    isLoading: executeDeletePortfolioItemLoading,
    error: executeDeletePortfolioItemError,
  } = useMutation(
    ['delete-portfolio-item'],
    (itemToDelete: PortfolioItem) => deletePortfolioItem(itemToDelete, authState.idToken ?? ''),
    {
      onSuccess: () => refetchItems(),
    },
  );

  const {
    mutateAsync: executeEditPortfolioItem,
    isLoading: executeEditPortfolioItemLoading,
    error: executeEditPortfolioItemError,
  } = useMutation(
    ['edit-portfolio-item'],
    (editedItem: PortfolioItem) => editPortfolioItem(editedItem, authState.idToken ?? ''),
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
    executeAddPortfolioItem,
    executeAddPortfolioItemLoading,
    executeAddPortfolioItemError,
    executeDeletePortfolioItem,
    executeDeletePortfolioItemLoading,
    executeDeletePortfolioItemError,
    executeEditPortfolioItem,
    executeEditPortfolioItemLoading,
    executeEditPortfolioItemError,
  };
};

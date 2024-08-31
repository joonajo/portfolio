import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

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
  } = useQuery({
    queryKey: ['get-portfolio-items'],
    queryFn: () => getPortfolioItems(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    select: data => Object.keys(data).map(key => data[key]),
  });

  const {
    mutate: executeAddPortfolioItem,
    isPending: executeAddPortfolioItemLoading,
    error: executeAddPortfolioItemError,
  } = useMutation({
    mutationKey: ['add-portfolio-item'],
    mutationFn: (newItem: PortfolioItem) => addPortfolioItem(newItem, authState.idToken ?? ''),
    onSuccess: async () => await refetchItems(),
  });

  const {
    mutate: executeDeletePortfolioItem,
    isPending: executeDeletePortfolioItemLoading,
    error: executeDeletePortfolioItemError,
  } = useMutation({
    mutationKey: ['delete-portfolio-item'],
    mutationFn: (itemToDelete: PortfolioItem) => deletePortfolioItem(itemToDelete, authState.idToken ?? ''),
    onSuccess: async () => await refetchItems(),
  });

  const {
    mutateAsync: executeEditPortfolioItem,
    isPending: executeEditPortfolioItemLoading,
    error: executeEditPortfolioItemError,
  } = useMutation({
    mutationKey: ['edit-portfolio-item'],
    mutationFn: (editedItem: PortfolioItem) => editPortfolioItem(editedItem, authState.idToken ?? ''),
    onSuccess: async () => await refetchItems(),
  });

  useEffect(() => {
    if (!!data) {
      setPortfolioItems(data.sort((a, b) => a.order - b.order));
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

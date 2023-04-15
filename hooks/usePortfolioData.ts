import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const portfolioUrl = 'https://joonajo-portfolio.firebaseio.com/items.json';

type PortfolioItem = {
  title: string;
  language: string[];
  link: string;
  githubLink: string;
  description: string;
  video_src: string;
  preview_src?: string;
  gif_src: string;
  desktop: boolean;
  mobile: boolean;
  order: number;
};

export const usePortfolioData = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  const {
    data,
    isFetching: loading,
    error,
  } = useQuery<{ [key: string]: PortfolioItem }>(
    portfolioUrl,
    () => fetch(portfolioUrl, { method: 'get' }).then(response => response.json()),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      onSuccess: data => {
        const itemArray = Object.keys(data).map(key => data[key]);
        return itemArray;
      },
    },
  );

  useEffect(() => {
    if (!!data) {
      setPortfolioItems(Object.keys(data).map(key => data[key]));
    }
  }, [data]);

  return { portfolioData: portfolioItems, loadingPortfolioData: loading, portfolioDataError: error };
};

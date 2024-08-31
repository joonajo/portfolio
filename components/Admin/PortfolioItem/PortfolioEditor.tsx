import * as React from 'react';
import styled from 'styled-components';

import { PortfolioItemCard } from './PortfolioItemCard';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import type { PortfolioItem as PortfolioItemT } from '../../../types';
import Loading from '../../UI/Loading/Loading';
import AddPortfolioItem from '../AddItem';

type Props = {
  items?: PortfolioItemT[];
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PortfolioEditor = ({ items }: Props) => {
  const [showAddForm, setShowAddForm] = React.useState<boolean>(false);

  const {
    executeAddPortfolioItem,
    executeAddPortfolioItemLoading,
    executeDeletePortfolioItem,
    executeDeletePortfolioItemLoading,
  } = usePortfolioData();

  const sending = executeAddPortfolioItemLoading || executeDeletePortfolioItemLoading;

  return (
    <>
      <Root>
        {items &&
          items.map((item: PortfolioItemT) => {
            return <PortfolioItemCard key={item.title} item={item} onDeleteItem={executeDeletePortfolioItem} />;
          })}
      </Root>
      <AddPortfolioItem
        showForm={showAddForm}
        setShowForm={setShowAddForm}
        add={executeAddPortfolioItem}
        sending={sending}
      />
      <Loading show={sending} transparent fadeout />
    </>
  );
};

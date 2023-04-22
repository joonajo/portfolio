import * as React from 'react';
import styled from 'styled-components';

import PortfolioItem from './Item';
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

const Editor = ({ items }: Props) => {
  const [showAddForm, setShowAddForm] = React.useState<boolean>(false);

  const { addPortfolioItem, addPortfolioItemLoading, deletePortfolioItem, deletePortfolioItemLoading } =
    usePortfolioData();

  const sending = addPortfolioItemLoading || deletePortfolioItemLoading;

  return (
    <>
      <Root>
        {items &&
          items.map((item: PortfolioItemT) => {
            return <PortfolioItem key={item.title} item={item} onDeleteItem={deletePortfolioItem} />;
          })}
      </Root>
      <AddPortfolioItem showForm={showAddForm} setShowForm={setShowAddForm} add={addPortfolioItem} sending={sending} />
      <Loading show={sending} transparent fadeout />
    </>
  );
};

export default Editor;

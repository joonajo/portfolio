import * as React from 'react';

import PortfolioItem from './Item/Item';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import { IPortfolioItem } from '../../../interfaces/interfaces';
import Loading from '../../UI/Loading/Loading';
import AddPortfolioItem from '../AddNewItem/AddItem';

type Props = {
  items?: IPortfolioItem[];
};

const Editor = ({ items }: Props) => {
  const [showAddForm, setShowAddForm] = React.useState<boolean>(false);

  const { addPortfolioItem, addPortfolioItemLoading, deletePortfolioItem, deletePortfolioItemLoading } =
    usePortfolioData();

  const sending = addPortfolioItemLoading || deletePortfolioItemLoading;

  return (
    <>
      <div>
        {items &&
          items.map((item: IPortfolioItem) => {
            return <PortfolioItem key={item.title} item={item} deleteItem={deletePortfolioItem} />;
          })}
        <AddPortfolioItem
          showForm={showAddForm}
          setShowForm={setShowAddForm}
          add={addPortfolioItem}
          sending={sending}
        />
      </div>
      <Loading show={sending} transparent fadeout />
    </>
  );
};

export default Editor;

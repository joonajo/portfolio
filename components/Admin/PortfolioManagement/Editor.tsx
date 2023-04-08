import * as React from 'react';

import PortfolioItem from './Item/Item';
import { useAuthContext } from '../../../context/authContext';
import { TPortfolioActionTypes, usePorftolioContext } from '../../../context/portfolioContext';
import { IPortfolioItem } from '../../../interfaces/interfaces';
import Loading from '../../UI/Loading/Loading';
import AddPortfolioItem from '../AddNewItem/AddItem';

type Props = {
  items?: IPortfolioItem[];
};

const Editor = ({ items }: Props) => {
  const [sending, setSending] = React.useState<boolean>(false);
  const [showAddForm, setShowAddForm] = React.useState<boolean>(false);
  const { state: authState } = useAuthContext();
  const { dispatch } = usePorftolioContext();

  const addItem = (item: IPortfolioItem) => {
    if (authState.signedIn) {
      setSending(true);
      const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items/';
      const title: string = item.title + '.json';
      const tokenParam: string = `?auth=${authState.idToken}`;

      fetch(baseURL + title + tokenParam, { method: 'put', body: JSON.stringify(item) }).then(response =>
        response.json().then(_data => {
          setSending(false);
          setShowAddForm(false);
          dispatch!({ type: TPortfolioActionTypes.ADD_ITEM, payload: item });
        }),
      );
    }
  };

  const deleteItem = (itemTitle: string) => {
    if (authState.signedIn) {
      setSending(true);
      const baseURL: string = 'https://joonajo-portfolio.firebaseio.com/items/';
      const itemParam: string = `${itemTitle}.json`;
      const tokenParam: string = `?auth=${authState.idToken}`;

      fetch(baseURL + itemParam + tokenParam, { method: 'delete' })
        .then(response => response.json())
        .then(_data => {
          setSending(false);
          dispatch!({ type: TPortfolioActionTypes.DELETE_ITEM, payload: itemTitle });
        });
    }
  };

  return (
    <>
      <div>
        {items &&
          items.map((item: IPortfolioItem) => {
            return <PortfolioItem key={item.title} item={item} deleteItem={deleteItem} />;
          })}
        <AddPortfolioItem showForm={showAddForm} setShowForm={setShowAddForm} add={addItem} sending={sending} />
      </div>
      <Loading show={sending} transparent fadeout />
    </>
  );
};

export default Editor;

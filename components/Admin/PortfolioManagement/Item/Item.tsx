import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import { icons } from '../../../../icons/icons';
import { IPortfolioItem } from '../../../../interfaces/interfaces';
import EditItem from '../../EditItem/EditItem';

type IItemComponent = {
  item: IPortfolioItem;
  deleteItem: (title: string) => void;
};

const PortfolioItem: React.FunctionComponent<IItemComponent> = ({ item, deleteItem }): JSX.Element => {
  const [editItem, setEditItem] = React.useState<boolean>(false);

  const editItemHandler = () => {
    setEditItem(!editItem);
  };

  return (
    <>
      <div>
        <div>
          <p>{item.title}</p>
        </div>
        <div>
          <div onClick={editItemHandler}>
            {' '}
            <FontAwesomeIcon icon={icons.faEdit as IconProp} /> <p>edit</p>{' '}
          </div>
          <DeleteButton deleteItem={() => deleteItem(item.title)} />
        </div>
      </div>
      <EditItem show={editItem} item={item} close={editItemHandler} />
    </>
  );
};

type IDeleteButton = {
  deleteItem(): void;
};

const DeleteButton: React.FunctionComponent<IDeleteButton> = ({ deleteItem }): JSX.Element => {
  const [showConfirm, setShowConfirm] = React.useState<boolean>(false);

  const confirmHandler = () => {
    deleteItem();
    setShowConfirm(false);
  };

  return (
    <>
      {!showConfirm && (
        <div onClick={() => setShowConfirm(true)}>
          {' '}
          <FontAwesomeIcon icon={icons.faTrash as IconProp} /> <p>delete</p>{' '}
        </div>
      )}
      {showConfirm && (
        <div>
          <p onClick={confirmHandler}>yes</p>
          <p onClick={() => setShowConfirm(false)}>no</p>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;

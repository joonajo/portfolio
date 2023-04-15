import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

import { icons } from '../../../../icons/icons';
import { PortfolioItem } from '../../../../types';
import EditItem from '../../EditItem/EditItem';

type Props = {
  item: PortfolioItem;
  onDeleteItem: (item: PortfolioItem) => void;
};

const Root = styled.div`
  border-radius: 8px;
  margin-block-end: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gainsboro;
`;

const PortfolioItem = ({ item, onDeleteItem }: Props) => {
  const [editItem, setEditItem] = React.useState(false);

  const handleEditItem = React.useCallback(() => {
    setEditItem(oldState => !oldState);
  }, []);

  return (
    <>
      <Root>
        <div>
          <p>{item.title}</p>
        </div>
        <div>
          <div onClick={handleEditItem}>
            <FontAwesomeIcon icon={icons.faEdit as IconProp} /> <p>edit</p>
          </div>
          <DeleteButton onDelete={() => onDeleteItem(item)} />
        </div>
      </Root>
      <EditItem show={editItem} item={item} close={handleEditItem} />
    </>
  );
};

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteButton = ({ onDelete }: DeleteButtonProps) => {
  const [showConfirm, setShowConfirm] = React.useState(false);

  const confirmHandler = () => {
    onDelete();
    setShowConfirm(false);
  };

  return (
    <>
      {!showConfirm && (
        <div onClick={() => setShowConfirm(true)}>
          <FontAwesomeIcon icon={icons.faTrash as IconProp} /> <p>delete</p>
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

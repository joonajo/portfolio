import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

import { EditItem } from './EditItem';
import { icons } from '../../../icons/icons';
import { PortfolioItem } from '../../../types';

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
  width: 70%;
  padding: 16px 32px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const EditButton = styled.div`
  cursor: pointer;
  transition: opacity 0.2s;
  margin-inline-end: 16px;

  :hover {
    opacity: 0.6;
  }
`;

export const PortfolioItemCard = ({ item, onDeleteItem }: Props) => {
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
        <Buttons>
          <EditButton onClick={handleEditItem}>
            <FontAwesomeIcon icon={icons.faEdit as IconProp} />
          </EditButton>
          <DeleteButton onDelete={() => onDeleteItem(item)} />
        </Buttons>
      </Root>
      <EditItem show={editItem} item={item} close={handleEditItem} />
    </>
  );
};

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteButtonRoot = styled.div`
  cursor: pointer;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.6;
  }
`;

const DeleteButton = ({ onDelete }: DeleteButtonProps) => {
  const [showConfirm, setShowConfirm] = React.useState(false);

  const confirmHandler = () => {
    onDelete();
    setShowConfirm(false);
  };

  return (
    <DeleteButtonRoot>
      {!showConfirm && (
        <div onClick={() => setShowConfirm(true)}>
          <FontAwesomeIcon icon={icons.faTrash as IconProp} />
        </div>
      )}
      {showConfirm && (
        <div>
          <p onClick={confirmHandler}>yes</p>
          <p onClick={() => setShowConfirm(false)}>no</p>
        </div>
      )}
    </DeleteButtonRoot>
  );
};

import * as React from 'react';

import css from './EditItem.module.css';
import ItemForm from './ItemForm';
import { formTypes } from '../../../form/form';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import { PortfolioItem } from '../../../types';
import Loading from '../../UI/Loading/Loading';

type Props = {
  show: boolean;
  item: PortfolioItem;
  close(): void;
};

const EditItem = ({ show, item, close }: Props) => {
  const { editPortfolioItem, editPortfolioItemLoading } = usePortfolioData();

  const handleSubmit = async (editedItem: PortfolioItem) => {
    await editPortfolioItem(editedItem);
    close();
  };

  const containerStyles = [css.EditItemContainer, show && css.show].join(' ');

  return (
    <>
      <div className={containerStyles}>
        <ItemForm
          type={formTypes.EDIT}
          show={show}
          sending={editPortfolioItemLoading}
          item={item}
          close={close}
          add={handleSubmit}
        />
      </div>
      <Loading show={editPortfolioItemLoading} transparent fadeout />
    </>
  );
};

export default EditItem;

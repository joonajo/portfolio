import * as React from 'react';

import css from './EditItem.module.css';
import { formTypes } from '../../../form/form';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import { IPortfolioItem } from '../../../interfaces/interfaces';
import Loading from '../../UI/Loading/Loading';
import ItemForm from '../ItemForm/ItemForm';

type Props = {
  show: boolean;
  item: IPortfolioItem;
  close(): void;
};

const EditItem = ({ show, item, close }: Props) => {
  const { editPortfolioItem, editPortfolioItemLoading } = usePortfolioData();

  const handleSubmit = async (editedItem: IPortfolioItem) => {
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

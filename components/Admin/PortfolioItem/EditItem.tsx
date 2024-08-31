import * as React from 'react';
import styled, { css } from 'styled-components';

import { PortfolioItemForm } from './PortfolioItemForm';
import { formTypes } from '../../../form/form';
import { usePortfolioData } from '../../../hooks/usePortfolioData';
import { PortfolioItem } from '../../../types';
import Loading from '../../UI/Loading/Loading';

type Props = {
  show: boolean;
  item: PortfolioItem;
  close(): void;
};

const Root = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;

  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
      z-index: 20;
    `}
`;

export const EditItem = ({ show, item, close }: Props) => {
  const { executeEditPortfolioItem, executeEditPortfolioItemLoading } = usePortfolioData();

  const handleSubmit = async (editedItem: PortfolioItem) => {
    await executeEditPortfolioItem(editedItem);
    close();
  };

  return (
    <>
      <Root $show={show}>
        <PortfolioItemForm
          type={formTypes.EDIT}
          show={show}
          sending={executeEditPortfolioItemLoading}
          item={item}
          close={close}
          add={handleSubmit}
        />
      </Root>
      <Loading show={executeEditPortfolioItemLoading} transparent fadeout />
    </>
  );
};

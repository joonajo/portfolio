import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

import { PortfolioItemForm } from './PortfolioItem/PortfolioItemForm';
import { formTypes } from '../../form/form';
import { icons } from '../../icons/icons';
import { PortfolioItem } from '../../types';
import Loading from '../UI/Loading/Loading';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  box-sizing: content-box;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.5s;
`;

const AddItemButton = styled.div`
  background: rgb(104, 132, 216);
  width: var(--item-width);
  height: var(--item-height);
  transition: all 0.3s;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: snow;
  position: relative;
  border-radius: var(--border-radius);

  &:hover {
    box-shadow: var(--item-shadow);
    background: royalblue;

    &${StyledIcon} {
      transform: rotate(180deg);
    }
  }
`;

type TProps = {
  showForm: boolean;
  sending: boolean;
  add(item: PortfolioItem): void;
  setShowForm(arg: boolean): void;
};

const AddPortfolioItem: React.FunctionComponent<TProps> = ({ showForm, setShowForm, add, sending }): JSX.Element => {
  const clickHandler = () => {
    setShowForm(true);
  };

  return (
    <>
      <Root>
        <AddItemButton onClick={clickHandler}>
          add item <StyledIcon icon={icons.faPlus as IconProp} />
        </AddItemButton>
        <PortfolioItemForm
          type={formTypes.ADD}
          show={showForm}
          close={() => setShowForm(false)}
          add={add}
          sending={sending}
        />
      </Root>
      <Loading show={sending} transparent fadeout />
    </>
  );
};

export default AddPortfolioItem;

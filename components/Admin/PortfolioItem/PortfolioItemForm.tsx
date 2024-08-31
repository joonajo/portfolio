import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

import cssModules from './ItemForm.module.css';
import { IForm, initialForm, updateEditForm, formTypes } from '../../../form/form';
import { icons } from '../../../icons/icons';
import { PortfolioItem } from '../../../types';
import Loading from '../../UI/Loading/Loading';

type Props = {
  show: boolean;
  sending: boolean;
  item?: PortfolioItem;
  type: string;
  close: () => void;
  add: (item: PortfolioItem) => void;
};

const Root = styled.form<{ $show: boolean }>`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  opacity: 0;
  width: var(--item-width);
  height: auto;
  transition: all var(--transition-time);
  overflow: hidden;
  background: white;
  padding: 10px;
  z-index: -1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: var(--border-radius);

  ${({ $show }) =>
    $show &&
    css`
      z-index: 1;
      opacity: 1;
      box-shadow: 0px 0px 100px -30px dimgray;
    `}
`;

const Backdrop = styled.div<{ $show: boolean }>`
  content: '';
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: -5;
  opacity: 0;
  transition: opacity var(--transition-time);

  ${({ $show }) =>
    $show &&
    css`
      z-index: 0;
      opacity: 1;
    `}
`;

const CloseButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;
  color: dimgray;

  :hover {
    color: gainsboro;
  }
`;

const AddButton = styled.div`
  background: royalblue;
  position: relative;
  /* bottom: 10px; */
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all var(--transition-time);
  color: white;
  text-transform: uppercase;

  :hover {
    box-shadow: var(--item-shadow);
  }
`;

export const PortfolioItemForm = ({ show, sending, item, close, add, type }: Props) => {
  const [form, setForm] = React.useState<IForm>(initialForm);

  React.useEffect(() => {
    if (!!item) {
      // update each field manually cus we bad
      const updatedForm: IForm = updateEditForm(item);
      setForm(updatedForm);
    }
  }, [item]);

  const optionClickHandler = (id: string, name: string) => {
    let updatedForm: IForm = { ...form };
    if (id === 'language') {
      updatedForm = {
        ...form,
        [id]: {
          ...form[id],
          options: {
            ...form[id].options,
            [name]: {
              ...form[id].options[name],
              selected: !form[id].options[name].selected,
            },
          },
        },
      };
    } else {
      updatedForm = {
        ...form,
        [id]: {
          ...form[id],
          options: {
            Yes: {
              selected: name === 'Yes',
            },
            No: {
              selected: name === 'No',
            },
          },
        },
      };
    }
    setForm(updatedForm);
  };

  const changeHandler = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    let updatedForm: IForm = { ...form };
    updatedForm = {
      ...form,
      [id]: {
        ...form[id],
        value: event.target.value,
      },
    };
    setForm(updatedForm);
  };

  const addHandler = () => {
    let selectedLanguages = Object.keys(form.language.options).filter(option => form.language.options[option].selected);
    if (selectedLanguages.length === 0) {
      selectedLanguages = ['React'];
    }

    const newItem: PortfolioItem = {
      title: form.title.value,
      language: selectedLanguages,
      description: form.description.value,
      link: form.link.value,
      githubLink: form.github.value,
      video_src: form.video_src.value,
      preview_src: form.preview_src.value,
      gif_src: form.gif_src.value,
      desktop: form.desktop.options.Yes.selected,
      mobile: form.mobile.options.Yes.selected,
      order: form.order.value,
    };
    add(newItem);
  };

  return (
    <>
      <Root $show={show}>
        <Loading show={sending} transparent fadeout />
        <CloseButton icon={icons.faTimes as IconProp} onClick={close} />
        {Object.keys(form).map((element: string) => {
          return (
            <FormInput
              key={element}
              type={type}
              item={form[element]}
              change={changeHandler}
              clickOption={optionClickHandler}
            />
          );
        })}
        <AddButton onClick={addHandler}>{type}</AddButton>
      </Root>
      <Backdrop $show={show} />
    </>
  );
};

type FormInputProps = {
  type: string;
  item: any;
  change: (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  clickOption: (id: string, name: string) => void;
};

const FormInput = ({ type, item, change, clickOption }: FormInputProps) => {
  const renderInputComponent = useCallback(() => {
    switch (item.elemType) {
      case 'input':
        return (
          <input
            value={item.value}
            disabled={type === formTypes.EDIT && item.id === 'title'}
            placeholder={item.placeholder}
            onChange={e => change(item.id, e)}
            className={cssModules.FormInput}
          />
        );

      case 'textarea':
        return (
          <textarea
            value={item.value}
            onChange={e => change(item.id, e)}
            placeholder={item.placeholder}
            className={cssModules.FormInput}
            rows={5}
          />
        );

      case 'select':
        return (
          <div className={cssModules.Select}>
            {Object.keys(item.options).map((option: any) => {
              const { selected } = item.options[option];
              return (
                <div
                  key={item.id + option}
                  className={[cssModules.Option, selected && cssModules.selected].join(' ')}
                  onClick={() => clickOption(item.id, option)}
                >
                  {option}
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  }, []);

  return (
    <div className={cssModules.FormInputContainer}>
      <p className={cssModules.FormInputTitle}>{item.id}</p>
      {renderInputComponent()}
    </div>
  );
};

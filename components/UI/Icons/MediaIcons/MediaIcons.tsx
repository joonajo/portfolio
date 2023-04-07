import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { icons } from '../../../../icons/icons';

const Wrapper = styled.div<{ horizontal?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: ${props => (props.horizontal ? 'row' : 'column')};
`;

const LinkWrapper = styled.a<{ horizontal?: boolean }>`
  overflow: hidden;
  transition: all 0.3s;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  color: var(--text-color);
  background: rgba(100, 100, 100, 0.2);
  margin: 5px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;

  &:svg {
    width: 15px;
  }

  &:hover {
    background: royalblue;
    color: black;
  }
`;

type Props = {
  horizontal?: boolean;
};

const MediaIcons = ({ horizontal }: Props) => {
  return (
    <Wrapper horizontal={horizontal}>
      <LinkWrapper
        horizontal={horizontal}
        href="https://github.com/joonajo"
        aria-label="github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icons.faGithub as IconProp} />
      </LinkWrapper>
      <LinkWrapper
        horizontal={horizontal}
        href="https://www.linkedin.com/in/joona-joenpolvi-751242179"
        aria-label="linkedin-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icons.faLinkedin as IconProp} />
      </LinkWrapper>
      <LinkWrapper horizontal={horizontal} href="mailto: joona.joenpolvi@gmail.com" aria-label="email-link">
        <FontAwesomeIcon icon={icons.faEnvelope as IconProp} />
      </LinkWrapper>
      <LinkWrapper
        horizontal={horizontal}
        href="https://instagram.com/joonajo"
        aria-label="ig-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icons.faInstagram as IconProp} />
      </LinkWrapper>

      <LinkWrapper
        horizontal={horizontal}
        href="https://www.flickr.com/photos/150620060@N07/"
        aria-label="flickr-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icons.faFlickr as IconProp} />
      </LinkWrapper>
    </Wrapper>
  );
};

export default MediaIcons;

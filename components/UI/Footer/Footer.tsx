import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import MediaIcons from '../Icons/MediaIcons/MediaIcons';

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Root = styled.div`
  z-index: 5;
  opacity: 1;
  animation: ${fadein} 1s;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-block-end: 24px;
`;

const IconsContainer = styled.div`
  position: relative;
`;

const Copyright = styled.div`
  margin-block-start: 4px;
  color: black;
  position: relative;
  font-size: 0.9em;
  cursor: default;
`;

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <Root>
      <IconsContainer>
        <MediaIcons horizontal />
      </IconsContainer>
      <Copyright>
        <i className="fas fa-cloud"></i>© Joona Joenpolvi {currentYear}. All rights reserved.
      </Copyright>
    </Root>
  );
};

export default Footer;

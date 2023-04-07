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
  position: absolute;
  box-sizing: border-box;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  opacity: 1;
  animation: ${fadein} 1s;
  background: transparent;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1.2rem;
`;

const IconsContainer = styled.div`
  position: relative;
`;

const Copyright = styled.div`
  color: whitesmoke;
  position: relative;
  font-size: 0.7em;
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
        <i className="fas fa-cloud"></i>
        <p>© Joona Joenpolvi {currentYear}. All rights reserved.</p>
      </Copyright>
    </Root>
  );
};

export default Footer;

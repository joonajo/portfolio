import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../../../../icons/icons'
import styled from 'styled-components'

const Wrapper = styled.div<{ horizontal?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: ${props => props.horizontal ? 'row' : 'column' };
`

const LinkWrapper = styled.a<{ horizontal?: boolean }>`
  overflow: hidden;
  transition: all .3s;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  color: var(--background-color);
  background: rgba(255, 255, 255, .2);
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
`

type TMediaIconsProps = {
  horizontal?: boolean
  vertical?: boolean
}

const MediaIcons: React.FunctionComponent<TMediaIconsProps> = (props): JSX.Element => {
  const { horizontal }: TMediaIconsProps = props

  return (
    <Wrapper horizontal={horizontal}>
      <LinkWrapper horizontal={horizontal} href='https://github.com/joonajo' aria-label="github-link" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faGithub} />
      </LinkWrapper>
      <LinkWrapper horizontal={horizontal} href='https://www.linkedin.com/in/joona-joenpolvi-751242179' aria-label="linkedin-link" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faLinkedin} />
      </LinkWrapper>
      <LinkWrapper horizontal={horizontal} href='mailto: joona.joenpolvi@gmail.com' aria-label="email-link">
        <FontAwesomeIcon icon={icons.faEnvelope} />
      </LinkWrapper>
      <LinkWrapper horizontal={horizontal} href="https://instagram.com/joonajo" aria-label="ig-link" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faInstagram} />
      </LinkWrapper>
      <LinkWrapper horizontal={horizontal} href="https://www.flickr.com/photos/150620060@N07/" aria-label="flickr-link" target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={icons.faFlickr} />
      </LinkWrapper>
    </Wrapper>
  )
}

export default MediaIcons
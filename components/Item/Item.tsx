import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css as styledComponentsCss } from 'styled-components';

import { icons } from '../../icons/icons';
import { IPortfolioItem } from '../../interfaces/interfaces';
import ExpandedVideo from '../ExpandedVideo/ExpandedVideo';

const SHOW_TRESHOLD = 100; // pixels

const Root = styled.div<{ show: boolean }>`
  width: 80%;
  max-width: 1800px;
  cursor: default;
  color: black;
  position: relative;
  overflow: hidden;
  margin: 24px 0;
  transition: opacity 1s, top 0.5s;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 100px;

  ${({ show }) =>
    show &&
    styledComponentsCss`
      opacity: 1;
      top: 0;
    `}
`;

const Title = styled.span`
  display: flex;
  margin: 24px 0;
  font-size: 1.2rem;
  position: relative;
  color: royalblue;
  text-transform: capitalise;
  letter-spacing: 0.1em;
  font-weight: 800;
  background: var(--background-color);
  padding: 12px;
  border-radius: 8px;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 16px;
  background: var(--background-color);
  border-radius: 8px;
`;

const Item = (props: IPortfolioItem) => {
  const [showItem, toggleShowItem] = React.useState<boolean>(false);
  const [showVideo, toggleShowVideo] = React.useState<boolean>(false);
  const itemRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

  // update the event listeners every time the showItem state is changed
  React.useEffect(() => {
    const checkIfInViewport = () => {
      if (itemRef && itemRef.current) {
        const itemPos = itemRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const newShowItem = itemPos < windowHeight - SHOW_TRESHOLD;
        if (newShowItem !== showItem) {
          toggleShowItem(newShowItem);
        }
      }
    };

    window.addEventListener('scroll', checkIfInViewport, true);

    return () => window.removeEventListener('scroll', checkIfInViewport, true);
  }, [showItem]);

  return (
    <Root show={showItem} ref={itemRef}>
      <Title>{props.title}</Title>
      <ItemContent>
        <ItemPreview
          video_src={props.video_src}
          preview_src={props.preview_src}
          gif_src={props.gif_src}
          link={props.link}
          githubLink={props.githubLink}
          toggle={toggleShowVideo}
        />
        <ItemInfo
          languages={props.language}
          title={props.title}
          desc={props.description}
          desktop={props.desktop}
          mobile={props.mobile}
          link={props.link}
          githubLink={props.githubLink}
        />
      </ItemContent>
      {showVideo && <ExpandedVideo video_src={props.video_src} close={() => toggleShowVideo(false)} />}
    </Root>
  );
};

type ItemInfoProps = {
  languages: string[];
  title: string;
  desc: string;
  desktop: boolean;
  mobile: boolean;
  link: string;
  githubLink: string;
};

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  padding: 16px 32px;
  width: 100%;
  font-size: 1rem;
`;

const MadeWith = styled.div`
  display: flex;
`;

const MadeWithItems = styled.p`
  position: relative;
  font-weight: 800;

  ::before {
    content: '-';
    opacity: 0;
  }
`;

const Description = styled.span`
  color: dimgray;
  padding: 12px 0;
  text-shadow: 0px 0px 10px 20px gainsboro;
`;

const IconsAndLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 8px;
    text-decoration: none;
    color: royalblue;
    text-transform: lowercase;
    transition: opacity 0.1s;

    svg {
      margin-inline-start: 8px;
    }

    :hover {
      opacity: 0.6;
    }
  }
`;

const ItemInfo = (props: ItemInfoProps) => {
  return (
    <InfoContainer>
      <MadeWith>
        made with
        <MadeWithItems>{props.languages.join(' + ')}</MadeWithItems>
      </MadeWith>
      <Description>{props.desc}</Description>
      <IconsAndLinksContainer>
        <LinksContainer>
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
            Github
            <FontAwesomeIcon height={35} icon={icons.faGithub as IconProp} size="1x" />
          </a>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Open
            <FontAwesomeIcon icon={icons.faExternalLinkSquareAlt as IconProp} size="1x" />
          </a>
        </LinksContainer>
        <HardwareIcons desktop={props.desktop} mobile={props.mobile} />
      </IconsAndLinksContainer>
    </InfoContainer>
  );
};

type HardwareIconsProps = {
  desktop: boolean;
  mobile: boolean;
};

const SystemIconsContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const SystemIconContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;

  svg {
    margin: 0 4px;
  }
`;

const HardwareIcons = ({ desktop, mobile }: HardwareIconsProps) => (
  <SystemIconsContainer>
    <SystemIconContainer>
      <FontAwesomeIcon icon={icons.faDesktop as IconProp} size="1x" />
      {desktop ? (
        <FontAwesomeIcon icon={icons.faCheck as IconProp} color="green" size="1x" />
      ) : (
        <FontAwesomeIcon icon={icons.faTimes as IconProp} color="crimson" size="1x" />
      )}
    </SystemIconContainer>

    <SystemIconContainer>
      <FontAwesomeIcon icon={icons.faMobileAlt as IconProp} size="1x" />
      {mobile ? (
        <FontAwesomeIcon icon={icons.faCheck as IconProp} color="green" size="1x" />
      ) : (
        <FontAwesomeIcon icon={icons.faTimes as IconProp} color="crimson" size="1x" />
      )}
    </SystemIconContainer>
  </SystemIconsContainer>
);

type PreviewProps = {
  video_src: string;
  preview_src?: string;
  gif_src: string;
  link: string;
  githubLink: string;
  toggle: (newValue: boolean) => void;
};

const PreviewMask = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  transition: opacity 0.2s;
  opacity: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const PreviewRoot = styled.div`
  position: relative;

  video {
    width: 100%;
  }

  :hover ${PreviewMask} {
    opacity: 1;
  }
`;

const ItemPreview = (props: PreviewProps) => {
  return (
    <PreviewRoot>
      <video poster={props.gif_src} muted autoPlay playsInline loop>
        <source src={props.preview_src} type="video/mp4" />
      </video>
      <PreviewMask>
        <ExpandVideo toggle={props.toggle} />
      </PreviewMask>
    </PreviewRoot>
  );
};

type ExpandVideoProps = {
  toggle: (newValue: boolean) => void;
};

const ExpandVideoRoot = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  p {
    border-radius: 5px;
    color: gray;
    background: transparent;
    padding: 5px;
    transition: all 0.2s;
  }

  svg {
    transition: all 0.2s;
    margin-left: 5px;
    width: 20px;
    color: white;
  }

  :hover {
    p {
      color: whitesmoke;
      /* color: black;
      background: whitesmoke; */
    }

    svg {
      transform: scale(1.2);
    }
  }
`;

const ExpandVideo = ({ toggle }: ExpandVideoProps) => {
  return (
    <>
      <ExpandVideoRoot onClick={() => toggle(true)}>
        <p>Expand Video</p>
        <FontAwesomeIcon icon={icons.faExpand as IconProp} color="white" size="1x" />
      </ExpandVideoRoot>
    </>
  );
};

export default Item;

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import css from './Item.module.css';
import { icons } from '../../icons/icons';
import { IPortfolioItem } from '../../interfaces/interfaces';
import ExpandedVideo from '../ExpandedVideo/ExpandedVideo';

const SHOW_TRESHOLD = 100; // pixels

const Item: React.FunctionComponent<IPortfolioItem> = (props): JSX.Element => {
  const [showItem, toggleShowItem] = React.useState<boolean>(false);
  const [showVideo, toggleShowVideo] = React.useState<boolean>(false);
  const itemRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

  // update the event listeners every time the showItem state is changed
  React.useEffect(() => {
    const checkIfInViewport = () => {
      if (itemRef && itemRef.current) {
        const itemPos: number = itemRef.current.getBoundingClientRect().top;
        const windowHeight: number = window.innerHeight;

        const newShowItem: boolean = itemPos < windowHeight - SHOW_TRESHOLD;
        if (newShowItem !== showItem) {
          toggleShowItem(newShowItem);
        }
      }
    };

    window.addEventListener('scroll', checkIfInViewport, true);

    return () => window.removeEventListener('scroll', checkIfInViewport, true);
  }, [showItem]);

  const itemClasses = [css.Item, showItem && css.show].join(' ');

  return (
    <div className={itemClasses} ref={itemRef}>
      <p className={css.Title}>
        <span>{props.title}</span>
      </p>
      <div className={css.ItemContent}>
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
      </div>
      {showVideo && <ExpandedVideo video_src={props.video_src} close={() => toggleShowVideo(false)} />}
    </div>
  );
};

type IItemInfo = {
  languages: string[];
  title: string;
  desc: string;
  desktop: boolean;
  mobile: boolean;
  link: string;
  githubLink: string;
};

const ItemInfo: React.FunctionComponent<IItemInfo> = (props): JSX.Element => {
  return (
    <div className={css.InfoContainer}>
      <div className={css.MadeWith}>
        made with
        {props.languages.map((lang: string, index: number) => (
          <p key={lang} className={css.Language}>
            {lang}
            {index !== props.languages.length - 1 ? <span style={{ color: 'dimgray' }}> + </span> : ''}
          </p>
        ))}
      </div>
      <p className={css.Description}>{props.desc}</p>
      <div className={css.IconsAndLinks}>
        <div className={css.ItemLinks}>
          <a className={css.ItemLinkContainer} href={props.githubLink} target="_blank" rel="noopener noreferrer">
            <p className={css.ItemLink}>Github</p>
            <div className={css.ItemLinkIcon}>
              <FontAwesomeIcon icon={icons.faGithub as IconProp} />
            </div>
          </a>
          <a className={css.ItemLinkContainer} href={props.link} target="_blank" rel="noopener noreferrer">
            <p className={css.ItemLink}>Open</p>
            <div className={css.ItemLinkIcon}>
              <FontAwesomeIcon icon={icons.faExternalLinkSquareAlt as IconProp} />
            </div>
          </a>
        </div>
        <HardwareIcons desktop={props.desktop} mobile={props.mobile} />
      </div>
    </div>
  );
};

type IHardwareICons = {
  desktop: boolean;
  mobile: boolean;
};

const HardwareIcons: React.FunctionComponent<IHardwareICons> = ({ desktop, mobile }): JSX.Element => (
  <div className={css.HardwareIcons}>
    <div className={css.HardwareIconContainer}>
      <div className={[css.HardwareIcon, css.DesktopIcon].join(' ')}>
        <FontAwesomeIcon icon={icons.faDesktop as IconProp} />
      </div>
      {desktop ? <CheckMarkIcon /> : <TimesIcon />}
    </div>
    <div className={css.HardwareIconContainer}>
      <div className={[css.HardwareIcon, css.MobileIcon].join(' ')}>
        <FontAwesomeIcon icon={icons.faMobileAlt as IconProp} />
      </div>
      {mobile ? <CheckMarkIcon /> : <TimesIcon />}
    </div>
  </div>
);

const CheckMarkIcon: React.FunctionComponent = (): JSX.Element => (
  <div className={[css.HardwareIcon, css.CheckMarkIcon].join(' ')}>
    <FontAwesomeIcon icon={icons.faCheck as IconProp} color="green" />
  </div>
);

const TimesIcon: React.FunctionComponent = (): JSX.Element => (
  <div className={[css.HardwareIcon, css.TimesIcon].join(' ')}>
    <FontAwesomeIcon icon={icons.faTimes as IconProp} color="crimson" />
  </div>
);

type IPreview = {
  video_src: string;
  preview_src?: string;
  gif_src: string;
  link: string;
  githubLink: string;
  toggle: (newValue: boolean) => void;
};

const ItemPreview: React.FunctionComponent<IPreview> = (props): JSX.Element => {
  return (
    <div className={css.PreviewContainer}>
      <video className={css.PreviewVideo} poster={props.gif_src} muted autoPlay playsInline loop>
        <source src={props.preview_src} type="video/mp4" />
      </video>
      <div className={css.PreviewMask}>
        <div className={css.MaskLinks}>
          {/* <MaskLink address={props.link} text="Open" icon={"link as IconProp"} />
          <MaskLink address={props.githubLink} text="Github" icon={"github as IconProp"} /> */}
          <ExpandVideo toggle={props.toggle} />
        </div>
      </div>
    </div>
  );
};

type IExpandVideo = {
  toggle: (newValue: boolean) => void;
};

const ExpandVideo: React.FunctionComponent<IExpandVideo> = ({ toggle }): JSX.Element => {
  const classes = [css.ExpandVideo].join(' ');

  return (
    <>
      <div className={classes} onClick={() => toggle(true)}>
        <p>Expand Video</p>
        <FontAwesomeIcon icon={icons.faExpand as IconProp} color="white" />
      </div>
    </>
  );
};

export default Item;

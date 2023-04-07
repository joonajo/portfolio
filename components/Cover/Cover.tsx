import React from "react";
import zenscroll from "zenscroll";

import MediaIcons from "../UI/Icons/MediaIcons/MediaIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../icons/icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import Image from "next/image";

const css = require("./Cover.module.css");

const Root = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const BackgroundMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(2, 0, 10, 0.8);
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const CoverContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const MediaIconsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const TitleContainer = styled.div`
  z-index: 10;
  display: flex;
  font-size: 1rem;
  flex-flow: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

type Props = {
  show: boolean;
  load: () => void;
};

const Cover = ({ show, load }: Props) => {
  const coverRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const scrollToPortfolio = React.useCallback(() => {
    if (coverRef && coverRef.current) {
      const posToScrollTo: number = coverRef.current.clientHeight;

      zenscroll.toY(posToScrollTo);
    }
  }, [coverRef]);

  const descStyles = [css.Description, show && css.loaded].join(" ");

  const animTextStyles = [css.AnimText, show && css.loaded].join(" ");

  return (
    <Root ref={coverRef} style={{ height: `${height}px` }}>
      <BackgroundContainer>
        <BackgroundImage
          src={`/images/palm.png`}
          alt="cover-bg-palm"
          onLoad={load}
        />
        <BackgroundMask />
      </BackgroundContainer>
      <CoverContent>
        <MediaIconsContainer>
          <MediaIcons vertical />
        </MediaIconsContainer>
        <TitleContainer>
          <div className={[animTextStyles, css.First].join(" ")}>
            <AnimatedText text="Joona" show={show} />
          </div>
          <div className={[animTextStyles, css.Second].join(" ")}>
            <AnimatedText text="Joenpolvi" show={show} delay={0.5} />
          </div>
          <p className={descStyles}>
            {" "}
            <span>{"<Front End Developer />"}</span>{" "}
          </p>
        </TitleContainer>
        <div className={css.ArrowContainer}>
          <div className={css.ArrowIcon} onClick={scrollToPortfolio}>
            <FontAwesomeIcon icon={icons.faChevronDown as IconProp} size="lg" />
          </div>
          <p className={css.ArrowText}>to portfolio</p>
        </div>
      </CoverContent>
    </Root>
  );
};

interface IAnimatedText {
  text: string;
  show?: boolean;
  delay?: number;
}

const AnimatedText: React.FunctionComponent<IAnimatedText> = ({
  text,
  show,
  delay,
}): JSX.Element => {
  const containerStyles = [css.AnimatedText].join(" ");

  const trueDelay: number = delay ? delay : 0;

  return (
    <div
      className={containerStyles}
      style={{ transitionDelay: `${trueDelay / 2 + 0.3}s` }}
    >
      {text}
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
      <span style={{ animationDelay: `${trueDelay}s` }}>{text}</span>
    </div>
  );
};

export default Cover;

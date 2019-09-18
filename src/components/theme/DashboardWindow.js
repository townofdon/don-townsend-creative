
import React, { useState, useEffect, useRef, useContext } from 'react';
import cx from 'classnames';

import { timeDashboardWaitBeforeShow } from '../../globals/constants';
import { urlLinkedIn, urlResume, urlGitHub } from '../../globals/urls';

import disableScrolling from '../../utils/scroll/disable-scrolling';
import enableScrolling from '../../utils/scroll/enable-scrolling';
import scrollToSection from '../../utils/scroll/scroll-to-section';

import ControlContext from '../../contexts/ControlContext';

import DashboardBar from './DashboardBar';
import DashboardItem from './DashboardItem';
import VideoWarpSpeed from './VideoWarpSpeed';

const DashboardWindow = () => {
  const [tooltip, setTooltip] = useState('');
  const [isShowing, setIsShowing] = useState(false);
  const {
    currentSection,
    theme,
    setTheme,
    isVideoPlaying,
    setIsVideoPlaying,
    isShowingThanks,
    isShowingNavigation,
    isRollingLeft,
    isRollingRight,
    setIsShowingThanks,
    setIsShowingNavigation,
    // setIsRollingRight,
    // setIsRollingLeft,
  } = useContext(ControlContext);
  const refVideo = useRef(null);
  const timeout = {
    thanks: useRef(null),
    reset: useRef(null),
  };

  useEffect(() => {
    if (!isShowing) {
      setTimeout(() => { setIsShowing(true) }, timeDashboardWaitBeforeShow)
    }
  });

  const playVideo = () => {
    if (!refVideo || !refVideo.current) { return; }
    // see: https://www.w3schools.com/tags/ref_av_dom.asp
    refVideo.current.play();
    setIsShowingThanks(false);
    disableScrolling();
  };

  const pauseVideo = () => {
    if (!refVideo || !refVideo.current) { return; }
    // see: https://www.w3schools.com/tags/ref_av_dom.asp
    refVideo.current.pause();
    enableScrolling();
  };

  const reset = () => {
    setIsVideoPlaying(false);
    enableScrolling();
  };

  const sayThankYou = () => {
    clearTimeout(timeout.reset.current);
    setIsShowingThanks(true);
    timeout.reset.current = setTimeout(() => { reset(); }, 5000);
  };

  const handleClickHome = (ev) => {
    ev.preventDefault();
    scrollToSection('main');
    setIsShowingNavigation(false);
  };

  const handleClickPortfolio = (ev) => {
    ev.preventDefault();
    scrollToSection('portfolio');
    setIsShowingNavigation(false);
  };

  const handleToggleNavigation = (ev) => {
    ev.preventDefault();
    setIsShowingNavigation(!isShowingNavigation);
  };

  const handleGoToWarpSpeed = () => {
    clearTimeout(timeout.thanks.current);
    if (isVideoPlaying) {
      setTheme('blue');
      pauseVideo();
      return;
    }
    setTheme('light');
    setIsVideoPlaying(true);
    timeout.thanks.current = setTimeout(() => { sayThankYou(); }, 13000);
    playVideo();
  }

  // const handleRollLeft = (ev) => {
  //   ev.preventDefault();
  //   setIsRollingLeft(true);
  //   setTimeout(() => {
  //     setIsRollingLeft(false);
  //   }, 1000);
  // };

  // const handleRollRight = (ev) => {
  //   ev.preventDefault();
  //   setIsRollingRight(true);
  //   setTimeout(() => {
  //     setIsRollingRight(false);
  //   }, 1000);
  // };

  const getDerivedCurrentSection = () => {
    if (/^main/i.test(currentSection)) {
      return 'main';
    }
    if (/^story/i.test(currentSection)) {
      return 'story';
    }
    if (/^warp/i.test(currentSection)) {
      return 'warp';
    }
    if (/^skillset/i.test(currentSection)) {
      return 'skillset';
    }
    if (/^portfolio/i.test(currentSection)) {
      return 'portfolio';
    }
    return '';
  };

  const getHyperdriveStatusText = () => {
    const currentSection = getDerivedCurrentSection();
    if (currentSection === 'warp' && theme === 'light') {
      return 'engaged';
    }
    switch (currentSection) {
      case 'warp':
        return 'ready';
      case 'skillset':
      case 'portfolio':
        return 'powering up';
      case 'main':
      case 'story':
      default:
        return 'offline';
    }
  }

  const getHyperDriveStatusClass = () => {
    switch (getHyperdriveStatusText()) {
      case 'engaged':
        return 'text-hyperdrive-engaged';
      case 'online':
      case 'ready':
        return 'text-success';
      case 'powering up':
        return 'text-hyperdrive-powering-up'
      case 'offline':
      default:
        return 'text-hyperdrive-offline';
    }
  };

  return (
    <>
      <VideoWarpSpeed
        isPlaying={isVideoPlaying}
        isShowingThanks={isShowingThanks && currentSection === 'warp-speed'}
        refVideo={refVideo}
        isRollingLeft={isRollingLeft}
        isRollingRight={isRollingRight}
      />
      <DashboardBar
        isTop
        theme={theme}
        isShowing={isShowing}
        left={(
          <ul>
            <DashboardItem
              className="text-uppercase color-bg-transparent"
              onClick={handleClickHome}
            >
              <strong>
                Don Townsend
              </strong>
            </DashboardItem>
            <DashboardItem>
              &bull;
            </DashboardItem>
            <DashboardItem
              className="text-uppercase color-bg-transparent"
              onClick={handleClickPortfolio}
            >
              Portfolio
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul className="text-right pr-2 pr-md-4 pr-lg-5">
            <DashboardItem
              href={urlResume}
              alt="Download Resume"
              setTooltip={setTooltip}
            >
              <i className="fas fa-user-astronaut"></i>
            </DashboardItem>
            <DashboardItem
              href={urlGitHub}
              alt="GitHub"
              setTooltip={setTooltip}
            >
              <i className="icon-github"></i>
            </DashboardItem>
            <DashboardItem
              href={urlLinkedIn}
              alt="LinkedIn"
              setTooltip={setTooltip}
            >
              <i className="fab fa-linkedin-in"></i>
            </DashboardItem>
          </ul>
        )}
        tooltip={tooltip}
      />
      <DashboardBar
        theme={theme}
        isShowing={isShowing}
        left={(
          <ul className="d-flex justify-content-start">
            <DashboardItem
              onClick={handleToggleNavigation}
              className="px-4 button-panel-navigation"
            >
              <strong>NAVIGATION</strong>
              &nbsp;&nbsp;<i className="icon-atom"></i>
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul className="d-flex justify-content-end pl-0 pr-2 pr-md-4 pr-md-5">
            <DashboardItem
              className="hyperdrive-status pl-3 pr-4 button-panel-controls"
            >
              <small>HYPERDRIVE STATUS:&nbsp;&nbsp;</small>
              <span className={cx(getHyperDriveStatusClass())}>
                {getHyperdriveStatusText()}
              </span>
            </DashboardItem>
            <DashboardItem
              onClick={handleGoToWarpSpeed}
              className="pl-3 pr-4 button-panel-controls"
              title="Go To Warp"
            >
              <i className="fas fa-space-shuttle fa-rotate-270"></i>&nbsp;&nbsp;
              <strong>CONTROLS</strong>
            </DashboardItem>
          </ul>
        )}
      />
    </>
  );
}

export default DashboardWindow;

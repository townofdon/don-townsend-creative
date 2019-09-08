
import React, { useState, useEffect, useRef, useContext } from 'react';
import DashboardBar from './DashboardBar';
import DashboardItem from './DashboardItem';

import ControlContext from '../../contexts/ControlContext';

import { timeDashboardWaitBeforeShow } from '../../globals/constants';
import { urlLinkedIn, urlResume, urlGitHub } from '../../globals/urls';
import VideoWarpSpeed from './VideoWarpSpeed';

import defaults from '../../globals/defaults';

const DashboardWindow = () => {
  const [tooltip, setTooltip] = useState('');
  const [isShowing, setIsShowing] = useState(false);
  const {
    theme,
    setTheme,
    isVideoPlaying,
    setIsVideoPlaying,
    isShowingThanks,
    isRollingLeft,
    isRollingRight,
    setIsShowingThanks,
    setIsShowingPanelNavigation,
    setIsRollingRight,
    setIsRollingLeft,
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
  };

  const pauseVideo = () => {
    if (!refVideo || !refVideo.current) { return; }
    // see: https://www.w3schools.com/tags/ref_av_dom.asp
    refVideo.current.pause();
  };

  const reset = () => {
    setTheme(defaults.theme);
    setIsVideoPlaying(false);
    setIsShowingThanks(false);
  };

  const sayThankYou = () => {
    clearTimeout(timeout.reset.current);
    setIsShowingThanks(true);
    timeout.reset.current = setTimeout(() => { reset(); }, 15000);
  };

  const handleGoToWarpSpeed = () => {
    clearTimeout(timeout.thanks.current);
    if (isVideoPlaying) {
      setTheme('dark');
      pauseVideo();
      return;
    }
    setTheme('red');
    setIsVideoPlaying(true);
    timeout.thanks.current = setTimeout(() => { sayThankYou(); }, 15000);
    playVideo();
  }

  const handleRollLeft = (ev) => {
    ev.preventDefault();
    setIsRollingLeft(true);
    setTimeout(() => {
      setIsRollingLeft(false);
    }, 1000);
  };

  const handleRollRight = (ev) => {
    ev.preventDefault();
    setIsRollingRight(true);
    setTimeout(() => {
      setIsRollingRight(false);
    }, 1000);
  };

  return (
    <>
      <VideoWarpSpeed
        isPlaying={isVideoPlaying}
        isShowingThanks={isShowingThanks}
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
            <DashboardItem className="text-uppercase">
              <strong>
                Don Townsend
              </strong>
            </DashboardItem>
            <DashboardItem>
              &bull;
            </DashboardItem>
            <DashboardItem className="text-uppercase">
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
          <ul className="d-flex justify-content-between">
            <DashboardItem
              onClick={() => setIsShowingPanelNavigation(true)}
              className="px-4 button-panel-navigation"
            >
              <strong>NAVIGATION</strong>
              &nbsp;&nbsp;<i className="icon-atom"></i>
            </DashboardItem>
            <DashboardItem>
              <img
                className="cursor-pointer"
                onClick={handleRollLeft}
                src="/img/btn-black.png"
                alt="Do a barrel roll"
                width={35}
                height={35}
              />
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul className="d-flex justify-content-between pl-0 pr-2 pr-md-4 pr-md-5">
            <DashboardItem>
              <img
                className="cursor-pointer"
                onClick={handleRollRight}
                src="/img/btn-black.png"
                alt="Do a barrel roll"
                width={35}
                height={35}
              />
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

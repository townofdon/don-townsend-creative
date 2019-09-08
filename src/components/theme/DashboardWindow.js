
import React, { useState, useEffect, useRef } from 'react';
import DashboardBar from './DashboardBar';
import DashboardItem from './DashboardItem';

import { timeDashboardWaitBeforeShow } from '../../globals/constants';
import { urlLinkedIn, urlResume } from '../../globals/urls';
import VideoWarpSpeed from './VideoWarpSpeed';

const DashboardWindow = () => {
  const themeDefault = 'dark';
  const [theme, setTheme] = useState(themeDefault);
  const [isShowing, setIsShowing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowingThanks, setIsShowingThanks] = useState(false);
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
    setTheme(themeDefault);
    setIsPlaying(false);
    setIsShowingThanks(false);
  };

  const sayThankYou = () => {
    clearTimeout(timeout.reset.current);
    setIsShowingThanks(true);
    timeout.reset.current = setTimeout(() => { reset(); }, 15000);
  };

  const handleGoToWarpSpeed = () => {
    clearTimeout(timeout.thanks.current);
    if (isPlaying) {
      setTheme('dark');
      pauseVideo();
      return;
    }
    setTheme('red');
    setIsPlaying(true);
    timeout.thanks.current = setTimeout(() => { sayThankYou(); }, 15000);
    playVideo();
  }

  return (
    <>
      <VideoWarpSpeed
        isPlaying={isPlaying}
        isShowingThanks={isShowingThanks}
        refVideo={refVideo}
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
            <DashboardItem className="text-uppercase">
              Portfolio
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul>
            <DashboardItem href={urlResume} alt="Download Resume" title="Download Resume">
              <i className="fas fa-file-pdf"></i>
            </DashboardItem>
            <DashboardItem href={urlLinkedIn} alt="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </DashboardItem>
          </ul>
        )}
      />
      <DashboardBar
        theme={theme}
        isShowing={isShowing}
        left={(
          <ul>
            <DashboardItem>
              Navigation&nbsp;
              <i className="icon-atom"></i>
            </DashboardItem>
            <DashboardItem>
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul>
            <DashboardItem>
              III
            </DashboardItem>
            <DashboardItem>
              IV
            </DashboardItem>
            <DashboardItem
              onClick={handleGoToWarpSpeed}
              className="warp"
              title="Go To Warp"
            >
              <strong>HYPERDRIVE</strong>
              &nbsp;&nbsp;<i className="fas fa-rocket"></i>
            </DashboardItem>
          </ul>
        )}
      />
    </>
  );
}

export default DashboardWindow;

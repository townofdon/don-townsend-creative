

import React, { useState, useContext, useRef } from 'react';
import cx from 'classnames';

import disableScrolling from '../../utils/scroll/disable-scrolling';
import enableScrolling from '../../utils/scroll/enable-scrolling';

import ScrollSection from '../../components/scroll/ScrollSection';
import ControlContext from '../../contexts/ControlContext';
import VideoWarpSpeed from '../../components/theme/VideoWarpSpeed';

import './99-WarpSpeed.style.scss';

const SectionWarpSpeed = () => {
  const {
    currentSection,
    setTheme,
    isVideoPlaying,
    setIsVideoPlaying,
    isShowingThanks,
    isRollingLeft,
    isRollingRight,
    setIsShowingThanks,
  } = useContext(ControlContext);

  const [isShowingButton, setIsShowingButton] = useState(true);
  const refVideo = useRef(null);
  const timeout = {
    thanks: useRef(null),
    reset: useRef(null),
    button: useRef(null),
  };

  const playVideo = () => {
    if (!refVideo || !refVideo.current) { return; }
    // see: https://www.w3schools.com/tags/ref_av_dom.asp
    refVideo.current.play();
    setIsShowingThanks(false);
    disableScrolling();
  };

  // const pauseVideo = () => {
  //   if (!refVideo || !refVideo.current) { return; }
  //   // see: https://www.w3schools.com/tags/ref_av_dom.asp
  //   refVideo.current.pause();
  //   enableScrolling();
  // };

  const reset = () => {
    setIsVideoPlaying(false);
    enableScrolling();
  };

  const sayThankYou = () => {
    clearTimeout(timeout.reset.current);
    setIsShowingThanks(true);
    timeout.reset.current = setTimeout(() => { reset(); }, 5000);
  };

  const handleGoToWarpSpeed = () => {
    if (isVideoPlaying) {
      return;
    }
    setTheme('light');
    setIsVideoPlaying(true);
    timeout.thanks.current = setTimeout(() => { sayThankYou(); }, 12000);
    timeout.button.current = setTimeout(() => { setIsShowingButton(false); }, 2400);
    playVideo();
  }

  return (
    <ScrollSection
      id="warp-speed"
      theme="blue"
      className="color-md-white d-flex align-items-end justify-content-center"
      viewHeight={1}
      backgroundColor="transparent"
      render={({
        pctProgressSection,
      }) => {
        return (
          <>
            <VideoWarpSpeed
              isPlaying={isVideoPlaying}
              isShowingThanks={isShowingThanks && currentSection === 'warp-speed'}
              refVideo={refVideo}
              isRollingLeft={isRollingLeft}
              isRollingRight={isRollingRight}
            />
            <div style={{ overflow: 'hidden' }}>
              <div
                className={cx('btn-hyperdrive-container', {
                  hide: !isShowingButton || isShowingThanks,
                  'cursor-pointer': !isVideoPlaying,
                })}
                onClick={handleGoToWarpSpeed}
              >
                <div class="btn-hyperdrive offline" />
                <div class="btn-hyperdrive ready" />
                <div class={cx('btn-hyperdrive active', {
                  'd-none': !isVideoPlaying,
                })} />
              </div>
            </div>
          </>
        );
      }}
    />
  );
};

export default SectionWarpSpeed;



import React, { useContext } from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';

import ControlContext from '../../contexts/ControlContext';

import './99-WarpSpeed.style.scss';

const SectionWarpSpeed = () => {
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
          <div style={{ overflow: 'hidden' }}>
            <div
              className={cx('btn-hyperdrive-container cursor-pointer', {
                hide: false,
              })}
              onClick={(ev) => {
                ev.preventDefault();
                setIsVideoPlaying(true);
              }}
            >
              <div class="btn-hyperdrive offline" />
              <div class="btn-hyperdrive ready" />
              <div class={cx('btn-hyperdrive active', {
                'd-none': !isVideoPlaying,
              })} />
            </div>
          </div>
        );
      }}
    />
  );
};

export default SectionWarpSpeed;


import React from 'react';
import cx from 'classnames';

import Container from '../grid/Container';

import './VideoWarpSpeed.style.scss';

const WarpSpeed = ({
  refVideo,
  isPlaying,
  isShowingThanks,
  isRollingRight,
  isRollingLeft,
}) => {
  return (
    <>
      <div className="video-contain">
        <video
          muted
          className={cx('video-warp-speed section-background', {
            'playing': isPlaying,
            'roll-left': isRollingLeft,
            'roll-right': isRollingRight,
          })}
          ref={refVideo}
        >
          <source src="/vid/demo-entering-hyperspace-2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={cx('fullscreen thanks align-items-center', {
        'd-none': !isShowingThanks,
        'd-flex': isShowingThanks,
      })}>
        <Container className="d-flex h-100 flex-column">
          <div className="mt-auto pt-5 pb-5 mb-5">
            <h1 className="color-white">THE END</h1>
            <h2 className="color-white mb-5">Produced by Don Townsend</h2>
          </div>
          <h4 className="color-white mb-5 pb-5">
            <button className="border border-white rounded btn btn-outline-light">
              INITIATE DOCKING PROCEDURE
            </button>
          </h4>
        </Container>
      </div>
    </>
  );
};

export default WarpSpeed;

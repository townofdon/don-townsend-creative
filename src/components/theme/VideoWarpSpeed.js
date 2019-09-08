
import React from 'react';
import cx from 'classnames';

import Container from '../grid/Container';

import './VideoWarpSpeed.style.scss';

const WarpSpeed = ({
  refVideo,
  isPlaying,
  isShowingThanks,
}) => {
  return (
    <>
      <div className="video-contain">
        <video
          muted
          className={cx('video-warp-speed', {
            'playing': isPlaying,
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
        <Container>
          <h1 className="color-white">Thanks for looking through my portfolio</h1>
          <h3 className="color-white">Have a great day!</h3>
        </Container>
      </div>
    </>
  );
};

export default WarpSpeed;

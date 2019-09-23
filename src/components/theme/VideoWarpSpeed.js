
import React, { useState } from 'react';
import cx from 'classnames';

import Container from '../grid/Container';
import ContactPanel from '../contact/ContactPanel';

import './VideoWarpSpeed.style.scss';

const WarpSpeed = ({
  refVideo,
  isPlaying,
  isShowingThanks,
  isRollingRight,
  isRollingLeft,
}) => {
  const [isShowingContact, setIsShowingContact] = useState(false);
  const handleDocking = (ev) => {
    ev.preventDefault();
    setIsShowingContact(true);
  };
  return (
    <>
      <video
        muted
        className={cx('video-warp-speed section-background', {
          'playing': isPlaying,
          'roll-left': isRollingLeft,
          'roll-right': isRollingRight,
        })}
        ref={refVideo}
        // required to comply with IOS standards
        // see: https://webkit.org/blog/6784/new-video-policies-for-ios/
        playsInline
      >
        <source src="/vid/entering-hyperspace.mp4" type="video/mp4" />
      </video>
      <div className={cx('fullscreen thanks align-items-center', {
        'd-none': true || !isShowingThanks,
        'd-block': isShowingThanks,
      })}>
        <Container className="d-block h-100 w-100">
          <div className="text">
            <h1 className="color-white">THE END</h1>
            <h2 className="color-white mb-5">Produced by Don Townsend</h2>
          </div>
          <h4 className="color-white button">
            <button
              className="border border-white rounded btn btn-outline-light px-4 py-2"
              onClick={handleDocking}
            >
              INITIATE DOCKING PROCEDURE
            </button>
          </h4>
        </Container>
      </div>
      <ContactPanel isShowing={isShowingContact} setIsShowing={setIsShowingContact} />
    </>
  );
};

export default WarpSpeed;

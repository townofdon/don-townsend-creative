

import React, { useRef } from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import ScrollItem from '../../components/scroll/ScrollItem';

import './01-Main.style.scss';

const SectionMain = () => {
  const refs = {
    mainTitle01: useRef(null),
    mainTitle02: useRef(null),
    mainTitle03: useRef(null),
    mainTitle03a: useRef(null),
    mainTitle03b: useRef(null),
    mainTitle03c: useRef(null),
    mainTitle04: useRef(null),
  };
  const pctProgressEnd = 166;
  return (
    <ScrollSection
      debug
      id="main"
      theme="light"
      className="color-bg-white color-md-black"
      backgroundColor="#fefefe"
      backgroundImage="/img/bg-star-port-faded.jpg"
      backgroundFixed
      viewHeight={3}
      render={({
        isSectionInView,
        pctProgressSection,
        width,
        height,
        position,
        winWidth,
        winHeight,
      }) => (
        <div className={cx('d-flex text-center align-items-center justify-content-center', {
          fullscreen: isSectionInView,
        })}>
          <div>
            <div className="main-title-01-nudge-right">
              <ScrollItem
                pctProgressStart={105}
                pctProgressEnd={pctProgressEnd}
                startOffsetLeft={10}
                startPercentLeft={0}
                pctProgressSection={pctProgressSection}
                sectionWidth={width}
                sectionHeight={height}
                winWidth={winWidth}
                winHeight={winHeight}
              >
                <h2
                  className="main-title-01 d-inline-block mb-5"
                >
                  D
                  <span className="the-reveal">ON&nbsp;</span>
                </h2>
              </ScrollItem>

              <ScrollItem
                pctProgressStart={105}
                pctProgressEnd={pctProgressEnd}
                startOffsetLeft={-40}
                startPercentLeft={100}
                pctProgressSection={pctProgressSection}
                sectionWidth={width}
                sectionHeight={height}
                winWidth={winWidth}
                winHeight={winHeight}
              >
                <h2
                  className="main-title-02 d-inline-block mb-5"
                >
                  T
                  <span className="the-reveal">OWNSEND</span>
                </h2>
              </ScrollItem>
            </div>

            <h3
              ref={refs.mainTitle03}
              className="main-title-03 mb-5"
            >
              <span ref={refs.mainTitle03a}>
                F
                <span className="the-reveal">ull-</span>
              </span>
              <span ref={refs.mainTitle03b}>
                S
                <span className="the-reveal">tack&nbsp;</span>
              </span>
              <span ref={refs.mainTitle03c}>
                W
                <span className="the-reveal">eb&nbsp;</span>
                <span className="the-reveal">Developer</span>
              </span>
            </h3>

            <h5
              ref={refs.mainTitle04}
              className="main-title-04 mb-0"
            >
              Passionate about clean, performant, and intuitive code.
            </h5>
          </div>
        </div>
      )}
    />
  );
};

export default SectionMain;

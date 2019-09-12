

import React, { useContext } from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import ScrollItem from '../../components/scroll/ScrollItem';
import BlurItem from '../../components/scroll/BlurItem';

import ControlContext from '../../contexts/ControlContext';

import './01-Main.style.scss';

const SectionMain = () => {
  const { setTheme } = useContext(ControlContext);
  return (
    <ScrollSection
      id="main"
      className="color-bg-white color-black"
      // background needs to be set to black to
      // avoid flicker if page is scrolled too fast.
      backgroundColor="#000"
      backgroundImage="/img/bg-star-port-faded.jpg"
      backgroundFixed
      viewHeight={4}
      scrollActions={[{
        condition: pct => pct <= 150 && pct < 0,
        callback: () => setTheme('light'),
      }, {
        condition: pct => pct > 150 && pct < 200,
        callback: () => setTheme('dark'),
      }]}
      render={({
        isSectionInView,
        pctProgressSection,
        width,
        height,
        position,
        winWidth,
        winHeight,
      }) => {
        const pctProgressEnd = 150;
        const scrollItemProps = {
          pctProgressStart: 105,
          pctProgressEnd,
          pctProgressSection,
          sectionWidth: width,
          sectionHeight: height,
          winWidth,
          winHeight,
        };
        const blurItemProps = {
          pctProgressStart: 160,
          pctProgressEnd: 200,
          pctProgressSection,
        };
        return (
          <div className={cx('d-flex text-center align-items-center justify-content-center', {
            fullscreen: isSectionInView,
            'show-the-reveal': pctProgressSection >= pctProgressEnd,
            'color-white': pctProgressSection >= pctProgressEnd,
          })}>
            <div className={cx('the-reveal color-bg-black', {
              fullscreen: isSectionInView,
            })} />
            <BlurItem
              startBlur={0}
              endBlur={10}
              startOpacity={1}
              endOpacity={0}
              easing="easeInQuad"
              {...blurItemProps}
            >
              <div className="over-fullscreen">
                <div className="main-title-01-nudge-right">
                  <h2
                    className="main-title-01 d-inline-block mb-5"
                  >
                    <ScrollItem
                      startPercentLeft={0}
                      startOffsetLeft={10}
                      startPercentTop={50}
                      startOffsetTop={-30}
                      easing="easeInOutQuad"
                      {...scrollItemProps}
                    >
                      D
                    </ScrollItem>
                    <span className="the-reveal">ON&nbsp;</span>
                  </h2>

                  <h2
                    className="main-title-02 d-inline-block mb-5"
                  >
                    <ScrollItem
                      startPercentLeft={100}
                      startOffsetLeft={-40}
                      startPercentTop={50}
                      startOffsetTop={-30}
                      easing="easeInOutQuad"
                      {...scrollItemProps}
                    >
                      T
                    </ScrollItem>
                    <span className="the-reveal">OWNSEND</span>
                  </h2>
                </div>

                <h3
                  className="main-title-03 mb-5"
                >
                  <span className="the-reveal">
                    Full-Stack Web&nbsp;
                  </span>
                  <ScrollItem
                    startOffsetLeft={-10}
                    startPercentLeft={50}
                    startPercentTop={22}
                    easing="easeInOutQuad"
                    {...scrollItemProps}
                  >
                    D
                  </ScrollItem>
                  <ScrollItem
                    startOffsetLeft={-10}
                    startPercentLeft={50}
                    startPercentTop={27.5}
                    easing="easeInOutQuad"
                    {...scrollItemProps}
                  >
                    e
                  </ScrollItem>
                  <ScrollItem
                    startOffsetLeft={-10}
                    startPercentLeft={50}
                    startPercentTop={33}
                    easing="easeInOutQuad"
                    {...scrollItemProps}
                  >
                    v
                  </ScrollItem>
                  <span className="the-reveal">eloper</span>
                </h3>

                <h5
                  className="main-title-04 mb-0"
                >
                  <span className="the-reveal">
                    Passionate about clean, performant, and intuitive code.
                  </span>
                </h5>
              </div>
            </BlurItem>
          </div>
        );
      }}
    />
  );
};

export default SectionMain;

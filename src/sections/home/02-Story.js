

import React from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import ScrollItem from '../../components/scroll/ScrollItem';
import BlurItem from '../../components/scroll/BlurItem';

import './02-Story.style.scss';

const SectionMain = () => {
  return (
    <ScrollSection
      id="story"
      theme="transparent"
      className="color-bg-black color-white d-none d-md-block"
      backgroundColor="#000"
      viewHeight={4}
      scrollToOffset={800}
      scrollPoints={[{
        pct: 38,
        id: 'story-b',
      }, {
        pct: 55,
        id: 'story-c',
      }, {
        pct: 70,
        id: 'story-d',
      }]}
      render={({
        isSectionInView,
        pctProgressSection,
        width,
        height,
        winWidth,
        winHeight,
      }) => {
        const scrollItemProps = {
          pctProgressStart: 100,
          pctProgressEnd: 190,
          pctProgressSection,
          sectionWidth: width,
          sectionHeight: height,
          winWidth,
          winHeight,
        };
        return (
          <div className={cx({
            fullscreen: isSectionInView,
          })}>
            <div className="story-container">
              <BlurItem
                className="d-block"
                pctProgressStart={100}
                pctProgressEnd={110}
                pctProgressSection={pctProgressSection}
                startOpacity={0}
                endOpacity={1}
              >
                <ScrollItem
                  className="d-block"
                  startNudgeTop={2400}
                  endNudgeTop={-1000}
                  easing="linear"
                  {...scrollItemProps}
                >
                  <div className="story-text text-justify">
                    <h2 className="text-center font-sans-condensed">DON TOWNSEND</h2>
                    <h3 className="text-center">A NEW HOPE FOR UX</h3>
                    <p>
                      There is unrest in the galatic empire
                      of web development. The bad UX implementors
                      have grasped control over the galactic senate
                      and it seems their victory is at hand.
                    </p>
                    <p>
                      But unbeknownst to them, a new force emerges,
                      a new hope for user experience and modular,
                      reusable code - UX Jedi master Don.
                    </p>
                    <p className="text-center text-uppercase"><strong>Top Coding Priorities</strong>:</p>
                    <ul className="text-center">
                      <li className="text-uppercase"><small>Do it right the first time</small></li>
                      <li className="text-uppercase"><small>Always strive for excellence</small></li>
                      <li className="text-uppercase"><small>Code should be easy to read</small></li>
                      <li className="text-uppercase"><small>Think like the end-user</small></li>
                      <li className="text-uppercase"><small>Plan early and often</small></li>
                    </ul>
                    <p>
                      With luck and with the assistance of the rebel fleet,
                      Don joins the Resistance against bad UX and vows to bring
                      an end to their evil tyranny!
                    </p>
                  </div>
                </ScrollItem>
              </BlurItem>
            </div>
          </div>
        );
      }}
    />
  );
};

export default SectionMain;

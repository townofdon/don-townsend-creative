

import React from 'react';
import cx from 'classnames';

import ScrollSection from '../../components/scroll/ScrollSection';
import ScrollItem from '../../components/scroll/ScrollItem';

import './02-Story.style.scss';

const SectionMain = () => {
  return (
    <ScrollSection
      id="story"
      className="color-bg-black color-white"
      backgroundColor="#000"
      viewHeight={4}
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
              <ScrollItem
                className="d-block"
                startNudgeTop={2400}
                endNudgeTop={-1000}
                easing="linear"
                {...scrollItemProps}
              >
                <div className="story-text text-justify">
                  <h2 className="text-center">DON TOWNSEND</h2>
                  <h3 className="text-center">THE PURSUIT OF EXCELLENCE</h3>
                  <p>
                    There is unrest in the galatic empire
                    of web development. The bad UX implementors
                    have grasped control over the galactic senate
                    and it seems their victory is at hand.
                  </p>
                  <p>
                    But unbeknownst to them, a new force emerges,
                    a beacon of hope and superior commitment to
                    user experience and modular, reusable code — Don Townsend.
                  </p>
                  <p>Among Don's <strong>top priorities</strong> in development are:</p>
                  <ul className="text-center">
                    <li className="text-uppercase"><small>Try to do it right the first time</small></li>
                    <li className="text-uppercase"><small>Always strive for excellence</small></li>
                    <li className="text-uppercase"><small>Write intelligible code</small></li>
                    <li className="text-uppercase"><small>Think like the end-user</small></li>
                    <li className="text-uppercase"><small>Plan early and often</small></li>
                  </ul>
                  <p>
                    With luck and the assistence of the rag-tag team of rebels,
                    Don joins the Resistance against bad UX and vows to bring
                    an end to their evil tyranny!
                  </p>
                </div>
              </ScrollItem>
            </div>
          </div>
        );
      }}
    />
  );
};

export default SectionMain;

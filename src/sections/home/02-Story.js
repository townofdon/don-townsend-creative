

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
      className="color-bg-black color-white"
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
                pctProgressEnd={120}
                pctProgressSection={pctProgressSection}
                startOpacity={0}
                endOpacity={1}
              >
                <ScrollItem
                  className="d-block"
                  startNudgeTop={3000}
                  endNudgeTop={-1000}
                  easing="linear"
                  {...scrollItemProps}
                >
                  <div className="story-text text-justify">
                    <h2 className="text-center font-sans-condensed">DON TOWNSEND</h2>
                    <h3 className="text-center">TECH STACK AWAKENS</h3>
                    <p>
                      There is unrest in the galatic empire
                      of software engineering. Anarchy grips
                      the industry and threatens to bring the
                      entire internet ecosystem to a grinding halt.
                    </p>
                    <p>
                      But some have joined the RESISTANCE. These
                      freedom fighters strive tirelessly to impart
                      the ancient teachings long-forgotten, about
                      the ways of THE FORCE - a mystical and deep
                      understanding about USER EXPERIENCE and
                      SOLID ARCHITECTURAL PLANNING.
                    </p>
                    <p>
                      Among these combatants, a humble programmer from
                      the planet REACTIA known as DON TOWNSEND learns
                      to harness THE FORCE and use his powers in the
                      quest for good.
                    </p>
                    <p className="text-center text-uppercase"><strong>Top Coding Priorities</strong>:</p>
                    <ul className="text-center">
                      <li className="text-uppercase"><small>Pursue Excellence</small></li>
                      <li className="text-uppercase"><small>Avoid Hasty Abstractions</small></li>
                      <li className="text-uppercase"><small>Write Self-Documenting Code</small></li>
                      <li className="text-uppercase"><small>Think Like The End-User</small></li>
                      <li className="text-uppercase"><small>Iterate Rapidly</small></li>
                    </ul>
                    <p>
                      With guidance from mentors and a little luck,
                      Don and his comrades are committed
                      to their ever-present mission:
                    </p>
                    <p className="text-center text-uppercase"><strong>CODE THE UNIVERSE</strong></p>
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

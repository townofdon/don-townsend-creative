
import React, { useRef, useContext } from 'react';
import cx from 'classnames';

import withScroll from '../../hocs/withScroll';
import useScrollCalculations from '../../custom-hooks/useScrollCalculations';
import useSetCurrentSection from '../../custom-hooks/useSetCurrentSection';
import debugScrollSection from '../../utils/scroll/debug-scroll-section';

import ControlContext from '../../contexts/ControlContext';

import ScrollBg from './ScrollBg';
import ScrollSectionContent from './ScrollSectionContent';

import './ScrollSection.scss';

const ScrollSection = ({
  id,
  theme,
  children,
  className,
  classNameContent,
  render,
  viewHeight = 1,
  debug = false,
  backgroundFixed = false,
  backgroundImage = '',
  backgroundColor = 'transparent',
  scrollActions = [],
  scrollPoints = [],
  scrollToOffset = 0,
  ...scrollProps,
}) => {
  const refSection = useRef(null);
  const calcs = useScrollCalculations(refSection, scrollProps);
  const { currentSection, setCurrentSection, setTheme, isRollingLeft, isRollingRight } = useContext(ControlContext);

  useSetCurrentSection({
    id,
    theme,
    setTheme,
    currentSection,
    setCurrentSection,
    calcs,
    scrollPoints,
  })

  const { pctProgressSection, isSectionInView } = calcs;
  scrollActions.forEach((scrollAction = {}) => {
    const { condition, callback } = scrollAction;
    const passesCondition = typeof condition === 'function'
      ? condition(pctProgressSection)
      : !!condition;
    if (passesCondition && isSectionInView && typeof callback === 'function') {
      callback();
    }
  });

  debugScrollSection(debug, scrollProps, calcs);

  const dynamicClassName = typeof className === 'function'
    ? className(pctProgressSection)
    : className;

  const dynamicBackgroundImage = typeof backgroundImage === 'function'
    ? backgroundImage(pctProgressSection)
    : backgroundImage
  
  const dynamicBackgroundColor = typeof backgroundColor === 'function'
    ? backgroundColor(pctProgressSection)
    : backgroundColor

  return (
    <div
      id={`section-${id}`}
      className={cx('scroll-section', dynamicClassName, `view-height-${viewHeight}`)}
      ref={refSection}
      data-scroll-to-offset={scrollToOffset}
    >
      {(scrollPoints && scrollPoints.length) ? (
        scrollPoints.map(scrollPoint => {
          if (!scrollPoint.pct) {
            throw new Error('scrollPoint needs a `pct` prop');
          }
          if (!scrollPoint.id) {
            throw new Error('scrollPoint needs a `id` prop');
          }
          return (
            <div
              key={`section-${scrollPoint.id}`}
              id={`section-${scrollPoint.id}`}
              className="scroll-section fill-absolute"
              style={{ top: `${scrollPoint.pct}%` }}
            />
          )
        })
      ) : null}
      <ScrollBg
        className={cx({
          'roll-left': isRollingLeft && currentSection === id,
          'roll-right': isRollingRight && currentSection === id,
        })}
        backgroundFixed={backgroundFixed && calcs.isSectionInView}
        backgroundImage={dynamicBackgroundImage}
        backgroundColor={dynamicBackgroundColor}
      />
      <ScrollSectionContent className={classNameContent}>
        {typeof render === 'function' ? (
          render({ ...scrollProps, ...calcs })
        ) : children}
      </ScrollSectionContent>
    </div>
  );
};

export default withScroll(ScrollSection);

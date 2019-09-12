
import React, { useRef, useContext } from 'react';
import cx from 'classnames';

import withScroll from '../../hocs/withScroll';
import useScrollCalculations from '../../custom-hooks/useScrollCalculations';
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
  ...scrollProps,
}) => {
  const refSection = useRef(null);
  const calcs = useScrollCalculations(refSection, scrollProps);
  const { currentSection, setCurrentSection, setTheme, isRollingLeft, isRollingRight } = useContext(ControlContext);
  const shouldSectionBecomeActive = currentSection !== id
    && calcs.pctProgressSection >= 100
    && calcs.pctProgressSection < 200
  if (shouldSectionBecomeActive) {
    if (id) { setCurrentSection(id); }
    if (theme) { setTheme(theme); }
  }

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
      id={id}
      className={cx('scroll-section', dynamicClassName, `view-height-${viewHeight}`)}
      ref={refSection}
    >
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

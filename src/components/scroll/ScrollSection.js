
import React, { useRef, useContext } from 'react';
import cx from 'classnames';

import withScroll from '../../hocs/withScroll';
import useScrollCalculations from '../../custom-hooks/useScrollCalculations';
import debugScrollSection from '../../utils/scroll/debug-scroll-section';

import ControlContext from '../../contexts/ControlContext';

import ScrollBg from './ScrollBg';
import ScrollSectionContent from './ScrollSectionContent';

import './ScrollSection.scss';
import usePrevious from '../../custom-hooks/usePrevious';

const ScrollSection = ({
  id,
  theme,
  children,
  render,
  className,
  viewHeight = 1,
  debug = false,
  backgroundFixed = false,
  backgroundImage = '',
  backgroundColor = '#000',
  backgroundClassName = '',
  ...scrollProps,
}) => {
  const refSection = useRef(null);
  const calcs = useScrollCalculations(refSection, scrollProps);
  const { setCurrentSection, setTheme } = useContext(ControlContext);
  const isSectionInViewPrev = usePrevious(calcs.isSectionInView);
  const sectionJustCameIntoView = calcs.isSectionInView && !isSectionInViewPrev;
  if (sectionJustCameIntoView) {
    if (id) { setCurrentSection(id); }
    if (theme) { setTheme(theme); }
  }

  debugScrollSection(debug, scrollProps, calcs);

  return (
    <div
      id={id}
      className={cx('scroll-section', className, `view-height-${viewHeight}`)}
      ref={refSection}
    >
      <ScrollBg
        className={backgroundClassName}
        backgroundFixed={backgroundFixed && calcs.isSectionInView}
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
      />
      <ScrollSectionContent>
        {typeof render === 'function' ? (
          render({ ...scrollProps, ...calcs })
        ) : children}
      </ScrollSectionContent>
    </div>
  );
};

export default withScroll(ScrollSection);

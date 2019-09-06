
import React, { useRef } from 'react';
import cx from 'classnames';

import withScroll from '../../hocs/withScroll';
import useScrollCalculations from '../../custom-hooks/useScrollCalculations';
import debugScrollSection from '../../utils/scroll/debug-scroll-section';

import './ScrollSection.scss';

const ScrollSection = ({ children, className, viewHeight = 1, debug = false, ...scrollProps }) => {
  const refSection = useRef(null);
  const calcs = useScrollCalculations(refSection, scrollProps);

  debugScrollSection(debug, scrollProps, calcs);

  return (
    <div
      className={cx('scroll-section', className, `view-height-${viewHeight}`)}
      ref={refSection}
    >
      {children}
    </div>
  );
};

export default withScroll(ScrollSection);

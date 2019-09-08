
import React, { useRef } from 'react';
import cx from 'classnames';

import withScroll from '../../hocs/withScroll';
import useScrollCalculations from '../../custom-hooks/useScrollCalculations';
import debugScrollSection from '../../utils/scroll/debug-scroll-section';

import ScrollBg from './ScrollBg';
import ScrollSectionContent from './ScrollSectionContent';

import './ScrollSection.scss';

const ScrollSection = ({
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

  debugScrollSection(debug, scrollProps, calcs);

  return (
    <div
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

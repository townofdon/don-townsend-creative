
import React from 'react';
import cx from 'classnames';

const ScrollSectionContent = ({
  children,
  className,
}) => (
  <div className={cx(className, 'scroll-section-content over-fullscreen')}>
    {children}
  </div>
);

export default ScrollSectionContent;

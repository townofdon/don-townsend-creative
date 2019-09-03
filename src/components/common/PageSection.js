
import React from 'react';
import cx from 'classnames';

import './PageSection.scss';

const PageSection = ({ children, className }) => (
  <div className={cx('page-section', className)}>
    {children}
  </div>
);

export default PageSection;

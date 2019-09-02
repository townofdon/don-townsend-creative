
import React from 'react';
import cx from 'classnames';

const Row = ({ children, className }) => (
  <div className={cx('row', className)}>
    {children}
  </div>
);

export default Row;

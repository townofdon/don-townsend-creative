
import React from 'react';
import cx from 'classnames';

const Link = ({
  className,
  children,
  href,
}) => (
  <a className={cx('text-reset', className)} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default Link;

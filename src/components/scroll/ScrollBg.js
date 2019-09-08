
import React from 'react';
import cx from 'classnames';

import './ScrollBg.style.scss';

const ScrollBg = ({
  className = '',
  backgroundFixed = false,
  backgroundImage = '',
  backgroundColor = '#000',
}) => (
  <div
    className={cx('section-background fullscreen background-cover', className)}
    style={{
      position: backgroundFixed ? 'fixed' : 'absolute',
      backgroundColor,
      backgroundImage: `url(${backgroundImage})`,
    }}
  />
);

export default ScrollBg;

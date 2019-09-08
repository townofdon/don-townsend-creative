
import React from 'react';
import cx from 'classnames';

import './Dashboard.style.scss';

// This is the part that displays at the top or bottom of the screen

const DashboardBar = ({
  left,
  right,
  isShowing = false,
  theme = 'light',
  isTop = false,
  tooltip = '',
}) => {
  return (
    <nav className={cx('dashboard', `${theme}-theme`, {
      top: isTop,
      bottom: !isTop,
      'show': isShowing,
    })}>
      <div className="left">
        <div className="inner bg">
          {left}
          <div className="diagonal bg" />
        </div>
      </div>
      <div className="right">
        <div className="inner bg">
          {right}
          <div className="diagonal bg" />
          <div className={cx('tooltip p-2', { show: !!tooltip })}>
            &nbsp;{tooltip}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardBar;


import React from 'react';
import cx from 'classnames';

import './Dashboard.style.scss';

// This is the part that displays at the top or bottom of the screen

// inside create three parts using Bootstrap maybe?
// Left
// Right
// Center connector piece

const DashboardBar = ({
  left,
  right,
  isShowing = false,
  isDarkTheme = false,
  isTop = false,
}) => {
  return (
    <nav className={cx('dashboard', {
      top: isTop,
      bottom: !isTop,
      'dark-theme': isDarkTheme,
      'light-theme': !isDarkTheme,
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
        </div>
      </div>
    </nav>
  );
};

export default DashboardBar;


import React, { useContext } from 'react';
import cx from 'classnames';

import ControlContext from '../../contexts/ControlContext';

import './NavigationPanel.style.scss';

const Item = ({
  children,
  onClick,
}) => (
  <p className="nav-panel-item">
    <button
      className="btn-link"
      onClick={onClick}
    >
      {children}
    </button>
  </p>
);

const NavigationPanel = () => {
  const {
    theme,
    isShowingNavigation,
  } = useContext(ControlContext);
  return (
    <div className={cx('navigation-panel', `${theme}-theme`, {
      showing: isShowingNavigation,
    })}>
      <div className="svg-top">
        <svg className="tri-left bg" viewBox="0 0 100 100">
          <polygon points="0 100, 100 0, 100 100" />
        </svg>
        <svg className="tri-right bg" viewBox="0 0 100 100">
          <polygon points="0 0, 100 100, 0 100" />
        </svg>
        <svg className="tri-left-2 bg" viewBox="0 0 100 100">
          <polygon points="0 100, 100 0, 100 100" />
        </svg>
        <svg className="tri-right-2 bg" viewBox="0 0 100 100">
          <polygon points="0 0, 100 100, 0 100" />
        </svg>
        <div className="fill-level-1 bg" />
        <div className="fill-level-2 bg" />
      </div>
      <div className="svg-right">
        <div className="fill-level-1 bg" />
        <svg className="tri bg" viewBox="0 0 100 100">
          <polygon points="0 0, 0 100, 100 0" />
        </svg>
      </div>
      <div className="fill-absolute bg bg-position" />
      <div className="inner p-4 p-lg-5">
        <Item>Coding Philosophy</Item>
        <Item>Skillset Inventory</Item>
        <Item>View Mission Log</Item>
        <Item>Go To Warp&nbsp;&nbsp;<span className="icon-space-shuttle"></span></Item>
      </div>
    </div>
  );
};

export default NavigationPanel;


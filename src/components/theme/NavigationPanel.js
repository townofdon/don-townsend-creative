
import React, { useContext } from 'react';
import cx from 'classnames';

import ControlContext from '../../contexts/ControlContext';
import scrollToSection from '../../utils/scroll/scroll-to-section';

import './NavigationPanel.style.scss';

const Item = ({
  children,
  sectionId,
}) => {
  const {
    setIsShowingNavigation,
  } = useContext(ControlContext);
  const handleClick = (ev) => {
    ev.preventDefault();
    if (sectionId) {
      console.log(sectionId);
      scrollToSection(sectionId);
      setIsShowingNavigation(false);
    }
  };
  return (
    <p className="nav-panel-item">
      <button
        className="btn-link"
        onClick={handleClick}
      >
        {children}
      </button>
    </p>
  );
};

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
      <div className="inner p-4">
        <Item sectionId="story">
          Coding Philosophy
        </Item>
        <Item sectionId="skillset-inventory">
          Skillset Inventory
        </Item>
        <Item sectionId="portfolio">
          Portfolio
        </Item>
        <Item sectionId="warp-speed">
          Go To Warp&nbsp;&nbsp;<span className="icon-space-shuttle"></span>
        </Item>
      </div>
    </div>
  );
};

export default NavigationPanel;


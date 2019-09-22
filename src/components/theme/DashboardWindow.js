
import React, { useState, useEffect, useContext } from 'react';
import cx from 'classnames';

import { timeDashboardWaitBeforeShow } from '../../globals/constants';
import { urlLinkedIn, urlResume, urlGitHub } from '../../globals/urls';

import scrollToSection from '../../utils/scroll/scroll-to-section';

import ControlContext from '../../contexts/ControlContext';

import DashboardBar from './DashboardBar';
import DashboardItem from './DashboardItem';

const DashboardWindow = () => {
  const [tooltip, setTooltip] = useState('');
  const [isShowing, setIsShowing] = useState(false);
  const {
    currentSection,
    theme,
    isShowingNavigation,
    setIsShowingNavigation,
    // setIsRollingRight,
    // setIsRollingLeft,
  } = useContext(ControlContext);

  useEffect(() => {
    if (!isShowing) {
      setTimeout(() => { setIsShowing(true) }, timeDashboardWaitBeforeShow)
    }
  });

  const handleClickHome = (ev) => {
    ev.preventDefault();
    scrollToSection('main');
    setIsShowingNavigation(false);
  };

  const handleClickPortfolio = (ev) => {
    ev.preventDefault();
    scrollToSection('portfolio');
    setIsShowingNavigation(false);
  };

  const handleToggleNavigation = (ev) => {
    ev.preventDefault();
    setIsShowingNavigation(!isShowingNavigation);
  };

  // const handleRollLeft = (ev) => {
  //   ev.preventDefault();
  //   setIsRollingLeft(true);
  //   setTimeout(() => {
  //     setIsRollingLeft(false);
  //   }, 1000);
  // };

  // const handleRollRight = (ev) => {
  //   ev.preventDefault();
  //   setIsRollingRight(true);
  //   setTimeout(() => {
  //     setIsRollingRight(false);
  //   }, 1000);
  // };

  const getDerivedCurrentSection = () => {
    if (/^main/i.test(currentSection)) {
      return 'main';
    }
    if (/^story/i.test(currentSection)) {
      return 'story';
    }
    if (/^warp/i.test(currentSection)) {
      return 'warp';
    }
    if (/^skillset/i.test(currentSection)) {
      return 'skillset';
    }
    if (/^portfolio/i.test(currentSection)) {
      return 'portfolio';
    }
    return '';
  };

  const getHyperdriveStatusText = () => {
    const currentSection = getDerivedCurrentSection();
    if (currentSection === 'warp' && theme === 'light') {
      return 'engaged';
    }
    switch (currentSection) {
      case 'warp':
        return 'ready';
      case 'skillset':
      case 'portfolio':
        return 'powering up';
      case 'main':
      case 'story':
      default:
        return 'offline';
    }
  }

  const getHyperDriveStatusClass = () => {
    switch (getHyperdriveStatusText()) {
      case 'engaged':
        return 'text-hyperdrive-engaged';
      case 'online':
      case 'ready':
        return 'text-success';
      case 'powering up':
        return 'text-hyperdrive-powering-up'
      case 'offline':
      default:
        return 'text-hyperdrive-offline';
    }
  };

  const getHyperDriveIndicatorLightClass = () => {
    switch (getHyperdriveStatusText()) {
      case 'engaged':
        return 'status-purple';
      case 'online':
      case 'ready':
        return 'status-green';
      case 'powering up':
        return 'status-yellow';
      case 'offline':
      default:
        return 'status-red';
    }
  };

  const cxLeft = 'd-flex justify-content-start pl-2 pl-md-4 pl-lg-5 text-left';
  const cxRight = 'd-flex justify-content-end pr-2 pr-md-4 pr-lg-5 text-right';

  return (
    <>
      <DashboardBar
        isTop
        theme={theme}
        isShowing={isShowing}
        left={(
          <ul className={cxLeft}>
            <DashboardItem
              className="text-uppercase color-bg-transparent"
              onClick={handleClickHome}
            >
              <strong>
                <span>D</span>
                <span className="d-none d-lg-inline">on</span>
                <span>&nbsp;</span>
                <span>T</span>
                <span className="d-none d-lg-inline">ownsend</span>
              </strong>
            </DashboardItem>
            <DashboardItem>
              <span className="d-none d-md-inline">
                &bull;
              </span>
            </DashboardItem>
            <DashboardItem
              className="text-uppercase color-bg-transparent"
              onClick={handleClickPortfolio}
            >
              <span className="d-none d-md-inline">Portfolio</span>
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul className={cxRight}>
            <DashboardItem
              classNameListItem="mr-3 mr-md-0"
              href={urlResume}
              alt="Download Resume"
              setTooltip={setTooltip}
            >
              <i className="fas fa-user-astronaut"></i>
            </DashboardItem>
            <DashboardItem
              classNameListItem="d-none d-md-inline-block"
              href={urlGitHub}
              alt="GitHub"
              setTooltip={setTooltip}
            >
              <i className="icon-github"></i>
            </DashboardItem>
            <DashboardItem
              href={urlLinkedIn}
              alt="LinkedIn"
              setTooltip={setTooltip}
            >
              <i className="fab fa-linkedin-in"></i>
            </DashboardItem>
          </ul>
        )}
        tooltip={tooltip}
      />
      <DashboardBar
        theme={theme}
        isShowing={isShowing}
        left={(
          <ul className={cxLeft}>
            <DashboardItem
              onClick={handleToggleNavigation}
              className="px-4 button-panel-navigation"
            >
              <strong>
                <span className="d-none d-md-inline">NAV</span>
                <span className="d-none d-lg-inline">IGATION</span>
              </strong>
              <span className="d-none d-md-inline">
                &nbsp;&nbsp;
              </span>
              <i className="icon-atom"></i>
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul className={cxRight}>
            <DashboardItem
              className="hyperdrive-status button-panel-controls"
            >
              <i className="fas fa-space-shuttle fa-rotate-270"></i>
              &nbsp;
              <small className="d-none d-md-inline">&nbsp;</small>
              <small className="d-none d-md-inline">HYPERDRIVE STATUS:&nbsp;&nbsp;</small>
              <span className={cx('d-none d-md-inline', getHyperDriveStatusClass())}>
                {getHyperdriveStatusText()}
              </span>
            </DashboardItem>
            <DashboardItem
              classNameListItem="d-inline-flex d-md-none align-items-center justify-content-center"
            >
              <span className={cx('hyperdrive-status-indicator-light', getHyperDriveIndicatorLightClass())} />
            </DashboardItem>
          </ul>
        )}
      />
    </>
  );
}

export default DashboardWindow;

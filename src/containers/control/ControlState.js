
import React, { useState } from 'react';

import ControlContext from '../../contexts/ControlContext';

import defaults from '../../globals/defaults';

const ControlState = ({ children }) => {
  const [theme, setTheme] = useState(defaults.theme);
  const [currentSection, setCurrentSection] = useState(defaults.section);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isShowingThanks, setIsShowingThanks] = useState(false);
  const [isShowingPanelNavigation, setIsShowingPanelNavigation] = useState(false);
  const [isRollingLeft, setIsRollingLeft] = useState(false);
  const [isRollingRight, setIsRollingRight] = useState(false);
  return (
    <ControlContext.Provider value={{
      theme,
      currentSection,
      isVideoPlaying,
      isShowingThanks,
      isShowingPanelNavigation,
      isRollingLeft,
      isRollingRight,
      setTheme,
      setCurrentSection,
      setIsVideoPlaying,
      setIsShowingThanks,
      setIsShowingPanelNavigation,
      setIsRollingLeft,
      setIsRollingRight,
    }}>
      {children}
    </ControlContext.Provider>
  );
};

export default ControlState;

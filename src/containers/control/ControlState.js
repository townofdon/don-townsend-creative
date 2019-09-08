
import React, { useState } from 'react';

import ControlContext from '../../contexts/ControlContext';

import defaults from '../../globals/defaults';

const ControlState = ({ children }) => {
  const [theme, setTheme] = useState(defaults.theme);
  const [currentSection, setCurrentSection] = useState(defaults.section);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isShowingThanks, setIsShowingThanks] = useState(false);
  const [isShowingPanelNavigation, setIsShowingPanelNavigation] = useState(false);
  return (
    <ControlContext.Provider value={{
      theme,
      setTheme,
      currentSection,
      setCurrentSection,
      isVideoPlaying,
      setIsVideoPlaying,
      isShowingThanks,
      setIsShowingThanks,
      isShowingPanelNavigation,
      setIsShowingPanelNavigation,
    }}>
      {children}
    </ControlContext.Provider>
  );
};

export default ControlState;

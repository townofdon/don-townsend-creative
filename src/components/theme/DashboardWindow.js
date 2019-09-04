
import React, { useState, useEffect } from 'react';
import DashboardBar from './DashboardBar';
import DashboardItem from './DashboardItem';

import { timeDashboardWaitBeforeShow } from '../../globals/constants';

const DashboardWindow = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (!isShowing) {
      setTimeout(() => { setIsShowing(true) }, timeDashboardWaitBeforeShow)
    }
  });

  return (
    <>
      <DashboardBar
        isTop
        isDarkTheme={isDarkTheme}
        isShowing={isShowing}
        left={(
          <ul>
            <DashboardItem>
              Don Townsend
            </DashboardItem>
            |
            <DashboardItem>
              Full-Stack Web Developer
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul>
            <DashboardItem>
              LinkedIn
            </DashboardItem>
          </ul>
        )}
      />
      <DashboardBar
        isDarkTheme={isDarkTheme}
        isShowing={isShowing}
        left={(
          <ul>
            <DashboardItem>
              I
            </DashboardItem>
            <DashboardItem>
              II
            </DashboardItem>
          </ul>
        )}
        right={(
          <ul>
            <DashboardItem>
              III
            </DashboardItem>
            <DashboardItem>
              IV
            </DashboardItem>
          </ul>
        )}
      />
    </>
  );
}

export default DashboardWindow;

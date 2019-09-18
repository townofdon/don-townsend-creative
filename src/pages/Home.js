
import React, { useContext } from 'react';
import cx from 'classnames';

import SectionMain from '../sections/home/01-Main';
import SectionStory from '../sections/home/02-Story';
import SectionSkillsetInventory from '../sections/home/03-SkillsetInventory';
import SectionPortfolio from '../sections/home/04-Portfolio';
import SectionWarpSpeed from '../sections/home/99-WarpSpeed';

import ControlContext from '../contexts/ControlContext';

import Theme from '../components/theme/Theme';

const PageHome = () => {
  const { currentSection } = useContext(ControlContext);
  return (
    <div className={cx('page-home', `current-section-${currentSection}`)}>
      <SectionMain />
      <SectionStory />
      <SectionSkillsetInventory />
      <SectionPortfolio />
      <SectionWarpSpeed />
      <Theme />
    </div>
  );
};

export default PageHome;

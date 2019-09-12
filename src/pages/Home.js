
import React from 'react';

import SectionMain from '../sections/home/01-Main';
import SectionStory from '../sections/home/02-Story';
import SectionSkillsetInventory from '../sections/home/03-SkillsetInventory';
import SectionWarpSpeed from '../sections/home/99-WarpSpeed';

import DashboardWindow from '../components/theme/DashboardWindow';

const PageHome = () => (
  <div className="page-home">
    <SectionMain />
    <SectionStory />
    <SectionSkillsetInventory />
    <SectionWarpSpeed />
    <DashboardWindow />
  </div>
);

export default PageHome;

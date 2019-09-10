
import React from 'react';

import SectionMain from '../sections/home/01-Main';
import SectionStory from '../sections/home/02-Story';
import SectionSkillsetSimulator from '../sections/home/02-SkillsetSimulator';
import SectionWarpSpeed from '../sections/home/99-WarpSpeed';

import DashboardWindow from '../components/theme/DashboardWindow';

const PageHome = () => (
  <div className="page-home">
    <SectionMain />
    <SectionStory />
    <SectionSkillsetSimulator />
    <SectionWarpSpeed />
    <DashboardWindow />
  </div>
);

export default PageHome;

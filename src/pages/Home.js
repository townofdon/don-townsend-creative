
import React from 'react';
import PageSection from '../components/common/PageSection';
import PageSectionInner from '../components/common/PageSectionInner';
import DynamicBackground from '../components/home/DynamicBackground';

const PageHome = () => (
  <div className="page-home">
    <PageSection>
      <PageSectionInner>
        <DynamicBackground />
        <h1 className="position-relative text-left">OPTIMIZE<br />DAILY</h1>
      </PageSectionInner>
    </PageSection>
  </div>
);

export default PageHome;

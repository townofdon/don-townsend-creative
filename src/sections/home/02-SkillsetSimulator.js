

import React from 'react';

import ScrollSection from '../../components/scroll/ScrollSection';

const SectionSkillsetSimulator = () => {
  return (
    <ScrollSection
      id="skillset-simulator"
      theme="dark"
      className="color-bg-cyan color-md-white d-flex align-items-center justify-content-center"
      viewHeight={1}
      backgroundColor="cyan"
      render={() => (
        <>
          <h1>Test</h1>
        </>
      )}
    />
  );
};

export default SectionSkillsetSimulator;

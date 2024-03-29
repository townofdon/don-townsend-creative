
import React from 'react';

import ProgressBar from './ProgressBar';

const Skill = ({ children, percentage }) => {
  return (
    <>
      <h5>
        {children}
      </h5>
      <ProgressBar percentage={percentage} offset={25} />
    </>
  );
};

export default Skill;

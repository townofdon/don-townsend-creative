
import React from 'react';

import './DynamicBackground.scss';

const DynamicBackground = ({
  children,
}) => (
  <div className="dynamic-background-home">
    {children}
  </div>
);

export default DynamicBackground;

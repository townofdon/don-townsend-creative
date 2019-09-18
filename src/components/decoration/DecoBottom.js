
import React from 'react';

import './Deco.style.scss';

const DecoBottom = () => (
  <div className="deco-bottom">
    <svg className="tri-left bg" viewBox="0 0 1 1">
      <polygon points="0 0, 1 0, 1 1" />
    </svg>
    <svg className="tri-right bg" viewBox="0 0 1 1">
      <polygon points="0 0, 0 1, 1 0" />
    </svg>
    <div className="fill bg" />
  </div>
);

export default DecoBottom;


import React from 'react';

import './Deco.style.scss';

const DecoLeft = () => (
  <div className="deco-left">
    <svg className="l-1-tri-top bg" viewBox="0 0 1 1">
      <polygon points="0 1, 1 1, 1 0" />
    </svg>
    <svg className="l-1-tri-bottom bg" viewBox="0 0 1 1">
      <polygon points="0 0, 1 0, 1 1" />
    </svg>
    <svg className="l-2-tri-top bg" viewBox="0 0 1 1">
      <polygon points="0 1, 1 1, 1 0" />
    </svg>
    <svg className="l-2-tri-bottom bg" viewBox="0 0 1 1">
      <polygon points="0 0, 1 0, 1 1" />
    </svg>
    <div className="l-1-fill bg" />
    <div className="l-2-fill bg" />
  </div>
);

export default DecoLeft;

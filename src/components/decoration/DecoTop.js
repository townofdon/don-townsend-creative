
import React from 'react';

import './Deco.style.scss';

const DecoTop = () => (
  <div className="deco-top">
    {/* LEVEL ONE - note - this is currently hidden */}
    <svg className="l-1-tri-left bg" viewBox="0 0 1 1">
      <polygon points="0 1, 1 0, 1 1" />
    </svg>
    <svg className="l-1-tri-right bg" viewBox="0 0 1 1">
      <polygon points="0 1, 0 0, 1 1" />
    </svg>
    <div className="l-1-fill bg" />
    {/* LEVEL TWO */}
    <svg className="l-2-tri-left bg" viewBox="0 0 1 1">
      <polygon points="0 1, 1 0, 1 1" />
    </svg>
    <svg className="l-2-tri-right bg" viewBox="0 0 1 1">
      <polygon points="0 1, 0 0, 1 1" />
    </svg>
    <div className="l-2-fill bg" />
  </div>
);

export default DecoTop;

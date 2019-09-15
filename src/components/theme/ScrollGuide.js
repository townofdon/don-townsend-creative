
import React, { useContext } from 'react';
import cx from 'classnames';

import ControlContext from '../../contexts/ControlContext';

import './ScrollGuide.style.scss';

const ScrollGuide = () => {
  const styleCircle = {
    strokeWidth: 1,
    fill: 'transparent',
  };
  const styleArrow = {
    strokeWidth: 1,
  };
  const styleText = {
    strokeWidth: 1,
  };
  const { theme = 'dark' } = useContext(ControlContext);
  return (
    <div className={cx('scroll-guide text-center no-select', `theme-${theme}`)}>
      {/* circle */}
      <svg height={60} width={60}>
        <circle cx={30} cy={30} r={25} style={styleCircle} />
      </svg>

      {/* text */}
      <svg className="scroll-guide-text" height={60} width={60}>
        <text x={14} y={28} style={styleText}>SCROLL</text>
      </svg>

      {/* arrow-bottom */}
      <svg className="scroll-guide-arrow" height={30} width={20}>
        <line x1={10} y1={0} x2={10} y2={30} style={styleArrow} />
        <line x1={5} y1={25} x2={10} y2={30} style={styleArrow} />
        <line x1={15} y1={25} x2={10} y2={30} style={styleArrow} />
      </svg>
    </div>
  );
};

export default ScrollGuide;

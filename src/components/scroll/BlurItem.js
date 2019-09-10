
import React from 'react';
import PropTypes from 'prop-types';
import easingFunctions from '../../utils/scroll/easing-functions';

const BlurItem = ({
  children,
  pctProgressStart,
  pctProgressEnd,
  pctProgressSection,
  easing = 'linear',
  startBlur = 0,
  endBlur = 5,
  startOpacity = 1,
  endOpacity = 1,
}) => {
  const getPercent = num => Math.max(0, Math.min(1, num));

  const ease = easingFunctions[easing] || easingFunctions.linear;

  const coefficientEnd = ease(getPercent(
    (pctProgressSection - pctProgressStart)
    /
    (pctProgressEnd - pctProgressStart)
  ));

  const coefficientStart = 1 - coefficientEnd;

  const blur = 0
      + startBlur * coefficientStart
      + endBlur * coefficientEnd;
  const opacity = 0
      + startOpacity * coefficientStart
      + endOpacity * coefficientEnd;

  const style = {
    filter: `blur(${blur}px)`,
    opacity,
  };

  return (
    <div
      className="d-inline-block"
      style={style}
    >
      {children}
    </div>
  );
};

BlurItem.propTypes = {
  pctProgressSection: PropTypes.number.isRequired,
  sectionWidth: PropTypes.number.isRequired,
  sectionHeight: PropTypes.number.isRequired,
  winWidth: PropTypes.number.isRequired,
  winHeight: PropTypes.number.isRequired,
};

export default BlurItem;

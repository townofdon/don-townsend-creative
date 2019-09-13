
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import easingFunctions from '../../utils/scroll/easing-functions';
import isNumeric from '../../utils/math/is-numeric';

const BlurItem = ({
  children,
  className = 'd-inline-block',
  pctProgressStart,
  pctProgressEnd,
  pctProgressSection,
  easing = 'linear',
  startBlur = 0,
  endBlur = 0,
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
  const getVal = (val, defaultVal = 0) => isNumeric(val) ? val : defaultVal;

  const style = {
    filter: `blur(${getVal(blur)}px)`,
    opacity: getVal(opacity),
  };

  return (
    <div
      className={cx(className)}
      style={style}
    >
      {children}
    </div>
  );
};

BlurItem.propTypes = {
  pctProgressSection: PropTypes.number.isRequired,
};

export default BlurItem;

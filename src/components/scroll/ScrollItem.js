
import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import getElementPosition from '../../utils/dom/get-element-position';
import calculateTranslateX from '../../utils/scroll/calculate-translate-x';
import calculateTranslateY from '../../utils/scroll/calculate-translate-y';
import useOnPageLoadOrResize from '../../custom-hooks/useOnPageLoadOrResize';
import easingFunctions from '../../utils/scroll/easing-functions';

const ScrollItem = ({
  children,
  classNameStart,
  classNameEnd,
  pctProgressStart,
  pctProgressEnd,
  pctProgressSection,
  sectionWidth,
  sectionHeight,
  winWidth,
  winHeight,
  percentageOf = 'section',
  easing = 'linear',
  startPercentTop = undefined,
  startPercentBottom = undefined,
  startPercentLeft = undefined,
  startPercentRight = undefined,
  startOffsetTop = undefined,
  startOffsetBottom = undefined,
  startOffsetLeft = undefined,
  startOffsetRight = undefined,
  endPercentTop = undefined,
  endPercentBottom = undefined,
  endPercentLeft = undefined,
  endPercentRight = undefined,
  endOffsetTop = undefined,
  endOffsetBottom = undefined,
  endOffsetLeft = undefined,
  endOffsetRight = undefined,
}) => {
  const refItem = useRef(null);
  const [startTranslateX, setStartTranslateX] = useState(0);
  const [startTranslateY, setStartTranslateY] = useState(0);
  const [endTranslateX, setEndTranslateX] = useState(0);
  const [endTranslateY, setEndTranslateY] = useState(0);

  const maxWidth = (percentageOf === 'section')
    ? sectionWidth || 0
    : winWidth || 0;

  const maxHeight = winHeight || 0;

  const setInitialPosition = useCallback(() => {
    if (!refItem.current || !sectionWidth || !sectionHeight) { return; }
    const position = getElementPosition(refItem.current);
    setStartTranslateX(calculateTranslateX(
      startOffsetLeft,
      startPercentLeft,
      startOffsetRight,
      startPercentRight,
      position,
      maxWidth,
    ) || 0);
    setEndTranslateX(calculateTranslateX(
      endOffsetLeft,
      endPercentLeft,
      endOffsetRight,
      endPercentRight,
      position,
      maxWidth,
    ) || 0);
    setStartTranslateY(calculateTranslateY(
      startOffsetTop,
      startPercentTop,
      startOffsetBottom,
      startPercentBottom,
      position,
      maxHeight,
    ) || 0);
    setEndTranslateY(calculateTranslateY(
      endOffsetTop,
      endPercentTop,
      endOffsetBottom,
      endPercentBottom,
      position,
      maxHeight,
    ) || 0);
  }, [
    refItem,
    sectionWidth,
    sectionHeight,
    maxWidth,
    maxHeight,
    startOffsetLeft,
    startPercentLeft,
    startOffsetRight,
    startPercentRight,
    endOffsetLeft,
    endPercentLeft,
    endOffsetRight,
    endPercentRight,
    startOffsetTop,
    startPercentTop,
    startOffsetBottom,
    startPercentBottom,
    endOffsetTop,
    endPercentTop,
    endOffsetBottom,
    endPercentBottom,
  ]);

  // set initial position
  useEffect(() => {
    setInitialPosition();
  }, [
    setInitialPosition,
    refItem,
    maxWidth,
    maxHeight,
    startOffsetLeft,
    startPercentLeft,
    startOffsetRight,
    startPercentRight,
    endOffsetLeft,
    endPercentLeft,
    endOffsetRight,
    endPercentRight,
    startOffsetTop,
    startPercentTop,
    startOffsetBottom,
    startPercentBottom,
    endOffsetTop,
    endPercentTop,
    endOffsetBottom,
    endPercentBottom,
  ]);

  useOnPageLoadOrResize(setInitialPosition);

  const getPercent = num => Math.max(0, Math.min(1, num));

  const ease = easingFunctions[easing] || easingFunctions.linear;

  const coefficientEnd = ease(getPercent(
    (pctProgressSection - pctProgressStart)
    /
    (pctProgressEnd - pctProgressStart)
  ));

  const coefficientStart = 1 - coefficientEnd;

  const translateX = 0
      + startTranslateX * coefficientStart
      + endTranslateX * coefficientEnd;

  const translateY = 0
      + startTranslateY * coefficientStart
      + endTranslateY * coefficientEnd;

  const style = {
    transform: `translate(${translateX}px, ${translateY}px)`,
  };

  return (
    <div
      className="d-inline-block"
      ref={refItem}
      style={style}
    >
      {children}
    </div>
  );
};

ScrollItem.propTypes = {
  pctProgressSection: PropTypes.number.isRequired,
  sectionWidth: PropTypes.number.isRequired,
  sectionHeight: PropTypes.number.isRequired,
  winWidth: PropTypes.number.isRequired,
  winHeight: PropTypes.number.isRequired,
};

export default ScrollItem;

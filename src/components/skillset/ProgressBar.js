
import React, { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

import withScroll from '../../hocs/withScroll';

import getElementPosition from '../../utils/dom/get-element-position';
import getScrollProgress from '../../utils/scroll/get-scroll-progress';
import getPercent from '../../utils/math/get-percent';
import isNumeric from '../../utils/math/is-numeric';

const ProgressBar = ({
  percentage = 50,
  currentScrollY,
  winHeight,
}) => {
  const refContainer = useRef(null);
  const refSvg = useRef(null);
  const refRect = useRef(null);
  const [position, setPosition] = useState({});
  const [pctProgressElem, setPctProgressElem] = useState(0);
  useEffect(() => {
    if (!refContainer.current) { return; }
    refSvg.current = d3.select(refContainer.current)
      .append('svg')
      .attr('height', 30)
      .attr('width', 0);
    const _position = getElementPosition(refContainer.current);
    refSvg.current
      .attr('width', _position.width);
    refSvg.current
      .append('rect')
      .attr('height', 20)
      .attr('width', 0)
      .attr('fill', 'gray')
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', _position.width);
    refRect.current = refSvg.current.append('rect')
      .attr('class', 'progress-rect')
      .attr('fill', 'black')
      .attr('height', 10)
      .attr('width', _position.width * .95)
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('x', _position.width * .05 / 2)
      .attr('y', 5);
    refRect.current = refSvg.current.append('rect')
      .attr('class', 'progress-rect')
      .attr('fill', function(){
        return '#00f6ff';
      })
      .attr('height', 10)
      .attr('width', 0)
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('x', _position.width * .05 / 2)
      .attr('y', 5);
    setPosition(_position);
  }, []);
  useEffect(() => {
    setPctProgressElem(getScrollProgress(currentScrollY, position.top, position.top + winHeight, winHeight));
    // use the golden ratio
    const width = getPercent((pctProgressElem) / 20) * position.width * (percentage / 100) * .95;
    if (!isNumeric(width)) {
      return;
    }
    refRect.current.attr('width', width);
  }, [percentage, currentScrollY, pctProgressElem, setPctProgressElem, position.width, position.top, position.bottom, winHeight]);
  return (
    <p>
      <span className="d-block" ref={refContainer}></span>
    </p>
  );
};

export default withScroll(ProgressBar);

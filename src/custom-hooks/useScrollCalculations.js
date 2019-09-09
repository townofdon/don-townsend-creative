import { useState } from 'react';

import getScrollProgress from '../utils/scroll/get-scroll-progress';
import getIsScrollInSection from '../utils/scroll/get-is-scroll-in-section';
import getIsSectionInView from '../utils/scroll/get-is-section-in-view';
import getElementPosition from '../utils/dom/get-element-position';
import useOnPageLoadOrResize from './useOnPageLoadOrResize';

// const doesNotMatch = (a, b) => (
//   a !== undefined && b !== undefined && a !== b
// );

export default function useScrollCalculations(refSection = {}, scrollProps = {}) {
  const [position, setPosition] = useState({});
  const { currentScrollY, winHeight } = scrollProps;

  useOnPageLoadOrResize(() => {
    if (!refSection.current) {
      return;
    }
    const { top, bottom, left, right } = getElementPosition(refSection.current);
    setPosition({ top, bottom, left, right });
  }, []);

  return {
    isSectionInView: getIsSectionInView(currentScrollY, position.top, position.bottom, winHeight),
    isScrollInSection: getIsScrollInSection(currentScrollY, position.top, position.bottom),
    pctProgressSection: getScrollProgress(currentScrollY, position.top, position.bottom),
    position,
    width: position.right - position.left,
    height: position.bottom - position.top,
  };
}
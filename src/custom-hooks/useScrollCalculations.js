import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

import getScrollProgress from '../utils/scroll/get-scroll-progress';
import getIsScrollInSection from '../utils/scroll/get-is-scroll-in-section';
import getIsSectionInView from '../utils/scroll/get-is-section-in-view';
import getElementPosition from '../utils/dom/get-element-position';

const doesNotMatch = (a, b) => (
  b !== undefined && a !== b
);

export default function useScrollCalculations(refSection = {}, scrollProps = {}) {
  const [position, setPosition] = useState({});
  const { currentScrollY, winHeight } = scrollProps;

  useEffect(() => {
    const calculatePosition = () => {
      if (!refSection.current) {
        return;
      }
      const { top, bottom, left, right } = getElementPosition(refSection.current);
      if (false
        || doesNotMatch(position.top, top)
        || doesNotMatch(position.bottom, bottom)
        || doesNotMatch(position.left, left)
        || doesNotMatch(position.right, right)
      ) {
        setPosition({ top, bottom, left, right });
      }
    };
    const onResize = debounce(calculatePosition, 100);
    // calculate position on page load
    // see: https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
    window.addEventListener('load', calculatePosition, false);
    // re-calculate position on page resize
    window.addEventListener('resize', onResize, false);
    // cleanup
    return () => {
      window.removeEventListener('load', calculatePosition, false);
      window.removeEventListener('resize', onResize, false);
    };
  }, [refSection, position]);

  return {
    isSectionInView: getIsSectionInView(currentScrollY, position.top, position.bottom, winHeight),
    isScrollInSection: getIsScrollInSection(currentScrollY, position.top, position.bottom),
    pctProgressSection: getScrollProgress(currentScrollY, position.top, position.bottom),
    position,
    width: position.right - position.left,
    height: position.bottom - position.top,
  };
}
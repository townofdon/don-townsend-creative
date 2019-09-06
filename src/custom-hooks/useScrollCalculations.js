import { useState, useEffect } from 'react';
import getScrollProgress from '../utils/scroll/get-scroll-progress';
import getIsScrollInSection from '../utils/scroll/get-is-scroll-in-section';
import getIsSectionInView from '../utils/scroll/get-is-section-in-view';

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
      const { top, bottom, left, right } = refSection.current.getBoundingClientRect() || {};
      if (false
        || doesNotMatch(position.top, top)
        || doesNotMatch(position.bottom, bottom)
        || doesNotMatch(position.left, left)
        || doesNotMatch(position.right, right)
      ) {
        setPosition({ top, bottom, left, right });
      }
    };
    // calculate position on page load
    // see: https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
    window.addEventListener('load', calculatePosition, false);
    // last-ditch effort to calculate position
    // if all else fails
    setTimeout(calculatePosition, 500);
    // cleanup
    return () => {
      window.removeEventListener('load', calculatePosition, false);
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
import { useState, useEffect, useCallback } from 'react';

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

  // NOTE - elements MUST have a height greater than 0
  // in order to be considered initialized .
  const isInitialized = !!position && !!position.bottom;

  const setInitialPosition = useCallback((_refSection, _setPosition) => {
    if (!_refSection.current) {
      return;
    }
    // reset any tranforms before getting position.
    _refSection.current.style.transform = null;
    const { top, bottom, left, right } = getElementPosition(_refSection.current);
    setPosition({ top, bottom, left, right });
  }, []);

  useOnPageLoadOrResize(() => {
    setInitialPosition(refSection, setPosition);
  });

  // BACKUP - try and initialize (set the position) if not already initialized.
  useEffect(() => {
    if (!isInitialized) {
      setInitialPosition(refSection, setPosition);
    }
  }, [setInitialPosition, refSection, isInitialized, currentScrollY]);

  return {
    isSectionInView: getIsSectionInView(currentScrollY, position.top, position.bottom, winHeight),
    isScrollInSection: getIsScrollInSection(currentScrollY, position.top, position.bottom),
    pctProgressSection: getScrollProgress(currentScrollY, position.top, position.bottom),
    position,
    width: position.right - position.left,
    height: position.bottom - position.top,
  };
}

import React, { useState, useEffect, useRef } from 'react';

import ScrollContext from '../../contexts/ScrollContext';

import getOnScrollAnimateHandler from '../../utils/scroll/get-on-scroll-animate-handler';
import getOnResizeHandler from '../../utils/scroll/get-on-resize-handler';
import getScrollProgress from '../../utils/scroll/get-scroll-progress';

const MainScrollCapture = ({ children }) => {
  const isIntialized = useRef(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [activeScrollElement, setActiveScrollElement] = useState('');
  const [winWidth, setWinWidth] = useState(0);
  const [winHeight, setWinHeight] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const onScroll = getOnScrollAnimateHandler(scrollY => setCurrentScrollY(scrollY));
  const onResize = getOnResizeHandler((_winWidth, _winHeight, _docHeight) => {
    setWinWidth(_winWidth);
    setWinHeight(_winHeight);
    setDocHeight(_docHeight);
  });

  // add the scroll event handler upon mount; remove on unmount
  useEffect(() => {
    if (!isIntialized.current) {
      isIntialized.current = true;
      window.addEventListener('scroll', onScroll, false);
      window.addEventListener('resize', onResize, false);
      // fire initial resize to set winWidth and winHeight
      onResize();
    }
    // cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, false);
      window.removeEventListener('resize', onResize, false);
    };
  // Returning an empty array for the dependencies
  // makes this useEffect mimick `componentDidMount`
  // and `componentWillUnMount`.
  // See: https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollContext.Provider value={{
      currentScrollY,
      winWidth,
      winHeight,
      docHeight,
      activeScrollElement,
      setActiveScrollElement,
      pctProgressDoc: getScrollProgress(currentScrollY, 0, docHeight),
    }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default MainScrollCapture;

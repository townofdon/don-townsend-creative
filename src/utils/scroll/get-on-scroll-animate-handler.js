// shamelessly borrowed from:
// https://codepen.io/dcorb/pen/pgOKKw
// Based on https://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events

import throttle from 'lodash/throttle';

// storing this in an object ensures that everything has access
// to the current value.
const scrollState = {
  lastestY: 0,
  isTicking: false,
};

function requestTick(animate, onScrollCaptured) {
	if(!scrollState.isTicking) {
		animate(() => {
      // reset the tick so we can
      // capture the next onScroll
      scrollState.isTicking = false;
      onScrollCaptured(scrollState.lastestY);
    });
	}
	scrollState.isTicking = true;
}

function onAnimate(animate, onScrollCaptured) {
  return () => {
    // No IE8
    scrollState.lastestY = window.scrollY;
    requestTick(animate, onScrollCaptured);
  }
}

function onThrottle(onScrollCaptured) {
  return () => onScrollCaptured(window.scrollY);
}

/**
 * Get a scroll handler that invokes the
 * callback function `onScrollCaptured` in
 * the desired animation frame.
 *
 * This function defaults to modern browser
 * `requestAnimationFrame` which is optimized for
 * animations; this falls back to lodash throttling
 * for legacy browsers.
 *
 * `onScrollCaptured` is passed a single `scrollY` param.
 *
 * **USAGE**
 *
 * ```
 * const onScroll = scrollY => {
 *   // do something with scrollY
 * }
 * window.addEventListener('scroll', getOnScrollAnimateHandler(onScroll), false);
 * ```
 *
 * @param {Function} onScrollCaptured
 */
export default function getOnScrollAnimateHandler(onScrollCaptured) {
  const animate = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.msRequestAnimationFrame
    || window.oRequestAnimationFrame
    || undefined;
  
  // fallback to lodash throttling if requestAnimationFrame
  // is unavailable (for legacy browsers)
  if (!animate) {
    // 16ms is approx. the same time between frames
    // as 60 FPS.
    return throttle(onThrottle(onScrollCaptured), 16);
  }

  return onAnimate(animate, onScrollCaptured);
}

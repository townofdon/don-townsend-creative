// shamelessly borrowed from:
// https://codepen.io/dcorb/pen/pgOKKw
// Based on https://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events

import throttle from 'lodash/throttle';

function onThrottle(onScrollCaptured) {
  return () => onScrollCaptured(window.scrollY);
}

/**
 * Get a simple onScroll handler that invokes
 * `onScrollCaptured` with `window.scrollY`.
 * This function is throttled to the same specs as
 * requestAnimationFrame.
 * Use this function for triggering class changes
 * that use css animations.
 *
 * `onScrollCaptured` is passed a single `scrollY` param.
 *
 * **USAGE**
 *
 * ```
 * const onScroll = scrollY => {
 *   // do something with scrollY
 * }
 * window.addEventListener('scroll', getOnScrollHandler(onScroll), false);
 * ```
 *
 * @param {Function} onScrollCaptured
 */
export default function getOnScrollHandler(onScrollCaptured, timeBetweenFrames = 16) {  
  return throttle(onThrottle(onScrollCaptured), timeBetweenFrames);
}

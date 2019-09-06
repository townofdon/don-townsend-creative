
import throttle from 'lodash/throttle';

function onThrottle(onResizeCaptured) {
  return () => {
    // see: https://stackoverflow.com/a/8876069
    const winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // see: https://stackoverflow.com/a/1147768
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    onResizeCaptured(winWidth, winHeight, docHeight);
  };
}

/**
 * Get a simple onResize handler that invokes
 * `onResizeCaptured` with `(winWidth, winHeight)`.
 *
 * **USAGE**
 *
 * ```
 * const onResize = (winWidth, winHeight) => {
 *   // do something with winWidth, winHeight
 * }
 * window.addEventListener('resize', getOnResizeHandler(onResize), false);
 * ```
 *
 * @param {Function} onResizeCaptured
 */
export default function getOnResizeHandler(onResizeCaptured, timeBetweenFrames = 16) {  
  return throttle(onThrottle(onResizeCaptured), timeBetweenFrames);
}

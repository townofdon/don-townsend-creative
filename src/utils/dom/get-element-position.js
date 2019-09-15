
import isPositionFixed from './is-position-fixed';

/**
 * Get the position of an html element, relative to the app root.
 * see: https://www.w3schools.com/jsref/prop_element_offsetheight.asp
 * see: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
 * @param {DomNode} elem 
 * @returns {Object}
 */
export default function getElementPosition(elem, debug = false) {
  if (!elem || !window) { return; }

  const isFixed = isPositionFixed(elem);
  const offsetTop = isFixed ? 0 : window.scrollY;
  const offsetLeft = isFixed ? 0 : window.scrollX;

  const rectElem = elem.getBoundingClientRect();

  const top = rectElem.top + offsetTop;
  const left = rectElem.left + offsetLeft;
  const bottom = top + elem.offsetHeight;
  const right = left + elem.offsetWidth;

  if (debug) {
    console.log(elem.style.position);
    console.log(window.scrollY);
    console.table(rectElem);
    console.table({ top, left, bottom, right });
  }

  return {
    top,
    left,
    bottom,
    right,
    width: right - left,
    height: bottom - top,
  }
}

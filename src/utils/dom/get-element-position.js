
/**
 * Get the position of an html element.
 * see: https://www.w3schools.com/jsref/prop_element_offsetheight.asp
 * see: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
 * @param {DomNode} elem 
 * @returns {Object}
 */
export default function getElementPosition (elem) {
  const rect = elem.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const top = rect.top + scrollTop;
  const left = rect.left + scrollLeft;
  const bottom = top + elem.offsetHeight;
  const right = left + elem.offsetWidth;
  return {
    top,
    left,
    bottom,
    right,
  }
}

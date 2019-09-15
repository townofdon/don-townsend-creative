import getElementPositionType from "./get-element-position-type";

/**
 * Determine if an element (or any of its html parents)
 * has position: fixed.
 * _recursive_
 *
 * @param {Node} elem
 */
export default function isPositionFixed(elem) {
  if (!elem) {
    return false;
  }
  const positionType = getElementPositionType(elem);
  if (positionType === 'fixed') {
    return true;
  }
  // see: https://www.w3schools.com/jsref/prop_node_parentelement.asp
  if (elem.parentElement) {
    return isPositionFixed(elem.parentElement);
  }
  return false;
}


/**
 * Determine if the current scroll position is inside of a section
 * @param {*} currentScrollY
 * @param {*} containerTopY
 * @param {*} containerBottomY
 * @returns {Boolean}
 */
export default function isScrollInSection(currentScrollY, containerTopY, containerBottomY) {
  return true
    && currentScrollY >= containerTopY
    && currentScrollY <= containerBottomY;
}

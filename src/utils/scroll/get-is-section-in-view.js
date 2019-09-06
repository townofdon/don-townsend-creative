
/**
 * Determine if an element is visible in the
 * current viewport.
 * @param {Number} currentScrollY 
 * @param {Number} containerTopY 
 * @param {Number} containerBottomY 
 * @param {Number} winHeight 
 * @param {Number} offset 
 * @returns {Boolean}
 */
export default function isSectionInView(currentScrollY, containerTopY, containerBottomY, winHeight, offset = 0) {
  return true
    && currentScrollY + winHeight + offset >= containerTopY
    && currentScrollY - offset <= containerBottomY;
}

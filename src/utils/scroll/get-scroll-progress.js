
/**
 * Get the scroll progress percentage (integer)
 *
 * **WHAT THE VALUES MEAN**
 *
 * 0% => The element's top border is at the very bottom of the viewport (_just out of view_)
 * 50% => The element's top border is in the middle of the viewport (_assuming the element is 100% viewport height_)
 * 100% => The element's top border is at the very top of the viewport
 * 150% => The element's bottom border is in the middle of the viewport (_assuming the element is 100% viewport height_)
 * 200% => The element's bottom border is at the very top of the viewport (_just out of view_)
 */
export default function getScrollProgress(currentScrollY = 0, containerTopY = 0, containerBottomY = 0, winHeight = 0) {
  const viewHeight = winHeight || (containerBottomY - containerTopY);
  const pctProgress = (
    (currentScrollY + viewHeight - containerTopY)
    /
    (containerBottomY - containerTopY)
    * 100
  );
  return pctProgress;
}

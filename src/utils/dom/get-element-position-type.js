
export default function getElementPositionType(elem) {
  if (!elem) {
    return 'static';
  }
  // see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#Getting_style_information
  return (window.getComputedStyle(elem) || {}).position || 'static';
}

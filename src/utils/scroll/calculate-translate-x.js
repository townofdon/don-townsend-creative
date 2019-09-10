
export default function calculateTranslateX(
  offsetLeft,
  percentLeft,
  offsetRight,
  percentRight,
  position = {},
  maxWidth = 0,
) {
  if (percentLeft !== undefined) {
    return 0
      // translateX in %
      - position.left
      // add percent offset
      + (percentLeft * .01 * maxWidth)
      // add additional offset, if any
      + (offsetLeft || 0);
  }
  if (offsetLeft !== undefined) {
    return 0
      + offsetLeft
      - position.left
  }
  if (percentRight !== undefined) {
    return 0
      // start from widest point and work down
      + maxWidth
      // target X in %
      - (percentRight * maxWidth)
      // add additional offset, if any
      - (offsetRight || 0)
      // subtract element left pos
      - position.left
      // subtract element width
      - position.width;
  }
  if (offsetRight !== undefined) {
    return 0
      // start from widest point and work down
      + maxWidth
      // subtract offset
      - offsetRight
      // subtract element left pos
      - position.left
      // subtract element width
      - position.width;
  }
  return 0;
};

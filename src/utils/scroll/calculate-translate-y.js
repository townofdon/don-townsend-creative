
export default function calculateTranslateY(
  offsetTop,
  percentTop,
  offsetBottom,
  percentBottom,
  position = {},
  maxHeight = 0,
) {
  if (percentTop !== undefined) {
    return 0
      // start at top of viewport
      - position.top
      // add percentage offset
      + (percentTop * .01 * maxHeight)
      // add additional offset, if any
      + (offsetTop || 0);
  }
  if (offsetTop !== undefined) {
    return 0
      // start at top of viewport
      - position.top
      // add offset in px
      + offsetTop;
  }
  if (percentBottom !== undefined) {
    return 0
      // target X in %
      + (percentBottom * .01 * maxHeight)
      // add additional offset, if any
      - (offsetBottom || 0)
      // subtract element bottom pos
      - position.top
      // subtract element height
      - position.height;
  }
  if (offsetBottom !== undefined) {
    return 0
      // start from lowermost point and work up
      + maxHeight
      // subtract offset
      - offsetBottom
      // subtract element bottom pos
      - position.top
      // subtract element height
      - position.height;
  }
  return 0;
};

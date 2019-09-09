
export default function calculateTranslateY(
  offsetTop,
  percentTop,
  offsetBottom,
  percentBottom,
  position = {},
  maxHeight = 777,
) {
  if (offsetTop !== undefined) {
    return 0
      // translateX in px
      + position.top - offsetTop
  }
  if (percentTop !== undefined) {
    return 0
      // translateX in %
      + position.top - percentTop * maxHeight
      // add additional offset, if any
      + (offsetTop || 0);
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
  if (percentBottom !== undefined) {
    return 0
      // target X in %
      + percentBottom * maxHeight
      // add additional offset, if any
      - (offsetBottom || 0)
      // subtract element bottom pos
      - position.top
      // subtract element height
      - position.height;
  }
  return 0;
};

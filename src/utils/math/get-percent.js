
/**
 * Return a percentage and limit the extremes to be
 * between 0 and 1.
 * @param {Number} num - number between 0 and 1
 */
const getPercent = num => Math.max(0, Math.min(1, num));

export default getPercent;


export default function isNumeric(something) {
  return !Number.isNaN(parseInt(something, 10));
}

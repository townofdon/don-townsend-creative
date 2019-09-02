/**
 * Insert CSS <link> into head
 * @param {string} src the url of the css
 */
export default function insertStyleLinkTag(src) {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = src;
  document.getElementsByTagName('head')[0].appendChild(style);
}

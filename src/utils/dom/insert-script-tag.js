
/**
 * Insert <script> into head
 * @param {string} src the url of the JS
 */
export default function insertScriptTag(src) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  document.getElementsByTagName('head')[0].appendChild(script);
}

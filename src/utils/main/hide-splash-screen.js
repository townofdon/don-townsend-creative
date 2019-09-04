
export default function hideSplashScreen() {
  // note that these timings need to align with animation times specified in ~/index.css
  const tWaitBeforeHide = 3000;
  const tHideDuration = 1000;
  const tEndOfHide = tWaitBeforeHide + tHideDuration;
  // Show the splash screen for X number of ms before hiding it.
  // Since the splash screen is a non-React element, we need to
  // grab it directly by ID.
  // See: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
  const $splashScreen = document.getElementById('splash');

  const hideBegin = () => {
    // see: https://www.w3schools.com/howto/howto_js_add_class.asp
    $splashScreen.classList.add('hide');
  };

  const hideEnd = () => {
    // see: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
    $splashScreen.remove();
  };

  setTimeout(hideBegin, tWaitBeforeHide);
  setTimeout(hideEnd, tEndOfHide);
}

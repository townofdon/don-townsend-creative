
import easings from './easing-functions';
import getElementPosition from '../dom/get-element-position';

// shamelessly borrowed from:
// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
function scrollIt(destination, duration = 200, easing = 'linear', callback) {
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number'
    ? destination
    : ((getElementPosition(destination) || {}).top || 0) + 1;
  const additionalOffset = typeof destination === 'number'
    ? 0
    : (parseInt(destination.dataset.scrollToOffset, 10) || 0);
  const finalOffset = destinationOffset + additionalOffset;
  const destinationOffsetToScroll = Math.round(documentHeight - finalOffset < windowHeight ? documentHeight - windowHeight : finalOffset);

  const invokeCallbackIfPresent = () => {
    if (typeof callback === 'function') {
      setTimeout(() => {
        callback();
      }, 2000);
    }
  };

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    invokeCallbackIfPresent();
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      invokeCallbackIfPresent();
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

export default function scrollToSection(sectionId, callback) {
  const section = document.getElementById(sectionId);
  if (!section) { return; }
  scrollIt(section, 1000, 'easeInOutQuad', callback);
}


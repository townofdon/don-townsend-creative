
import { useEffect } from 'react';

import debounce from 'lodash/debounce';

/**
 * **NOTE** - `dependencies` defaults to empty array to explicitly
 * set zero dependencies. This means that this useEffect will only
 * fire on `componentDidMount` and `componentWillUnMount`.
 *
 * @param {Function} callback
 * @param {Array} dependencies
 */
export default function useOnPageLoadOrResize(callback) {
  useEffect(() => {
    const onResize = debounce(callback, 100);
    // calculate position on page load
    // see: https://stackoverflow.com/questions/588040/window-onload-vs-document-onload
    window.addEventListener('load', callback, false);
    // cleanup
    return () => {
      window.removeEventListener('load', callback, false);
      window.removeEventListener('resize', onResize, false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

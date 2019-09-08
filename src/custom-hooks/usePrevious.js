
import { useRef, useEffect } from 'react';

/**
 * Get the prev "props" using a react hook.
 * Shamelessly borrowed from: https://stackoverflow.com/a/53446665
 *
 * **USAGE::**
 * ```
 * const { a, b } = props;
 * const prevProps = usePrevious({ a, b });
 * if (a === prevProps.a) {
 *   // do something
 * }
 * ```
 *
 * **GOTCHA:**
 * This function must adhere to the rules of hooks.
 * see: https://reactjs.org/docs/hooks-rules.html
 */
export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

import { useEffect } from 'react';

/**
 * Accepts a function that executes when clicked outside of the passed ref
 */
function useClickOutside(ref, callback, dependencies) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, ...dependencies]);
}

export default useClickOutside;

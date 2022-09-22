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
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, ...dependencies]);
}

export default useClickOutside;

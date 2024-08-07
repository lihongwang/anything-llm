import { useState, useEffect, useCallback } from "react";

function useDebounce(callback, delay) {
  const [timer, setTimer] = useState(null);

  const debouncedCallback = useCallback(
    (event, ...args) => {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      if (timer) clearTimeout(timer);
      const newTimer = setTimeout(() => {
        callback(event, ...args);
      }, delay);
      setTimer(newTimer);
    },
    [callback, delay, timer]
  );

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return debouncedCallback;
}

export default useDebounce;

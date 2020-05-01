import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.error(initialValue);
      return initialValue;
    }
  });

  const setLocalValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, storedValue);
  };

  return [storedValue, setLocalValue];
};

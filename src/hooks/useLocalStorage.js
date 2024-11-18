import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Initialize state with value from localStorage or initial value
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // Update localStorage when value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
 export default useLocalStorage

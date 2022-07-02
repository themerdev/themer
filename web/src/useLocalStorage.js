import { useEffect, useState } from 'react';

const EVENT_NAME = 'storage:self';

export default function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(() =>
    localStorage.getItem(key),
  );

  useEffect(() => {
    if (!storedValue) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, storedValue);
    }
    window.dispatchEvent(new Event(EVENT_NAME));
  }, [key, storedValue]);

  const listener = () => {
    setStoredValue(localStorage.getItem(key));
  };

  useEffect(() => {
    window.addEventListener(EVENT_NAME, listener);
    return () => window.removeEventListener(EVENT_NAME, listener);
  });

  useEffect(() => {
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  });

  return [storedValue, setStoredValue];
}

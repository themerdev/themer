import { useEffect } from 'react';

export default function useEscListener(handler) {
  const escListener = evt => {
    if (evt.key === 'Escape') {
      handler();
    }
  };
  useEffect(() => {
    window.document.addEventListener('keydown', escListener);
    return () => {
      window.document.removeEventListener('keydown', escListener);
    };
  });
};

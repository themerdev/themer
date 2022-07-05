import { useEffect, useState } from 'react';

export default function useViewportDimensions() {
  const [width, setWidth] = useState(
    window.innerWidth * window.devicePixelRatio,
  );
  const [height, setHeight] = useState(
    window.innerHeight * window.devicePixelRatio,
  );

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth * window.devicePixelRatio);
      setHeight(window.innerHeight * window.devicePixelRatio);
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return [width, height];
}

import { useEffect, useState } from 'react';

export default function useViewportDimensions() {
  const [width, setWidth] = useState(
    window.innerWidth * window.devicePixelRatio,
  );
  const [height, setHeight] = useState(
    window.innerHeight * window.devicePixelRatio,
  );

  const listener = () => {
    setWidth(window.innerWidth * window.devicePixelRatio);
    setHeight(window.innerHeight * window.devicePixelRatio);
  };

  useEffect(() => {
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  const dprListener = () => {
    listener();
    const mql = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`,
    );
    mql.addEventListener('change', dprListener, { once: true });
    return () => mql.removeEventListener('change', dprListener);
  };

  useEffect(dprListener, []);

  return [width, height];
}

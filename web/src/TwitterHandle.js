import React, { useContext } from 'react';
import styles from './TwitterHandle.module.css';
import ThemeContext from './ThemeContext';

export default () => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);

  return (
    <a
      className={ styles.handle }
      style={{
        '--handle-resting-background-color': getActiveColorOrFallback(['shade1'], true),
        '--handle-hover-background-color': getActiveColorOrFallback(['shade2'], true),
        '--handle-active-background-color': getActiveColorOrFallback(['shade0'], true),
        color: getActiveColorOrFallback(['shade7']),
      }}
      href="https://twitter.com/intent/follow?screen_name=themerdev"
      target="_blank"
      rel="noopener noreferrer"
    >Follow @themerdev</a>
  );
}

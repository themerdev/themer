import React, { useContext } from 'react';
import Color from 'color';
import useEscListener from './useEscListener';
import ThemeContext from './ThemeContext';
import styles from './Modal.module.css';

export default ({ children, footer, onClose }) => {
  useEscListener(onClose);
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <div
      className={ styles.scrim }
      style={{
        backgroundColor: Color(getActiveColorOrFallback(['shade0'], true)).fade(0.25).hsl(),
      }}
    >
      <div
        className={ styles.content }
        style={{
          backgroundColor: getActiveColorOrFallback(['shade0'], true),
          borderColor: getActiveColorOrFallback(['shade7']),
          boxShadow: `0 0 var(--size-large-1) var(--size-large-1) ${getActiveColorOrFallback(['shade0'], true)}`,
        }}
      >
        <div className={ styles.body }>{ children }</div>
        <footer
          className={ styles.footer }
          style={{ borderTopColor: getActiveColorOrFallback(['shade2']) }}
        >
          { footer }
        </footer>
      </div>
    </div>
  )
}

import React, { forwardRef, useContext } from 'react';
import styles from './Button.module.css';
import ThemeContext from './ThemeContext';

export default forwardRef(
  (
    { small, special, secondary, className, onClick, disabled, type, children },
    buttonRef,
  ) => {
    const { getActiveColorOrFallback } = useContext(ThemeContext);
    const getColorKeys = () => {
      if (disabled) {
        return ['shade3'];
      } else if (small || special) {
        return ['shade7'];
      } else if (secondary) {
        return ['shade6'];
      } else {
        return ['accent4', 'shade6'];
      }
    };
    return (
      <button
        type={type}
        className={[
          styles.button,
          small && styles.small,
          special && styles.special,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        data-text={children}
        style={{
          'color': getActiveColorOrFallback(getColorKeys()),
          '--button-resting-background-color': getActiveColorOrFallback(
            ['shade1'],
            true,
          ),
          '--button-hover-background-color': getActiveColorOrFallback(
            ['shade2'],
            true,
          ),
          '--button-active-background-color': getActiveColorOrFallback(
            ['shade0'],
            true,
          ),
          '--button-special-color-1': getActiveColorOrFallback(['accent1']),
          '--button-special-color-2': getActiveColorOrFallback(['accent7']),
        }}
        onClick={onClick}
        disabled={disabled}
        ref={buttonRef}
      >
        {children}
      </button>
    );
  },
);

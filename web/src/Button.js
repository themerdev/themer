import React, { forwardRef } from 'react';
import ColorState from './ColorState';
import styles from './Button.module.css';

export default forwardRef(({
  small,
  special,
  className,
  onClick,
  disabled, 
  children,
}, buttonRef) => {
  const getColorKeys = () => {
    if (disabled) {
      return ['shade3', 'shade0'];
    } else if (small || special) {
      return ['shade7'];
    } else {
      return ['accent4', 'shade6', 'shade7'];
    }
  }
  return (
    <ColorState>
      { ({ getColor }) => (
        <button
          className={ [
            styles.button,
            small && styles.small,
            special && styles.special,
            className,
          ].filter(Boolean).join(' ') }
          data-text="Download"
          style={{
            color: getColor(...getColorKeys()),
            '--button-resting-background-color': getColor('shade1', 'shade0'),
            '--button-hover-background-color': getColor('shade2', 'shade0'),
            '--button-active-background-color': getColor('shade0'),
            '--button-special-color-1': getColor('accent1', 'shade7'),
            '--button-special-color-2': getColor('accent7', 'shade7'),
          }}
          onClick={ onClick }
          disabled={ disabled }
          ref={ buttonRef }
        >{ children }</button>
      ) }
    </ColorState>
  );
});

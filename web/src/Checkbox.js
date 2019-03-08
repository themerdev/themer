import React, { useContext } from 'react';
import { CheckIcon } from './Icons';
import styles from './Checkbox.module.css';
import ThemeContext from './ThemeContext';

export default ({ className, value, accentSelected, onChange, label }) => {
  const { getActiveColorOrFallback } = useContext(ThemeContext);
  return (
    <label
      className={ [styles.wrapper, className].join(' ') }
      style={{
        color: value && accentSelected
          ? getActiveColorOrFallback(['accent3'])
          : getActiveColorOrFallback(['shade7']),
      }}
      tabIndex="0"
      onKeyDown={ evt => {
        if (evt.key === ' ' || evt.key === 'Enter') {
          evt.preventDefault();
          onChange(!value);
        }
      } }
    >
      <input
        type="checkbox"
        className={ styles.input }
        checked={ value }
        onChange={ evt => onChange(evt.target.checked) }
      />
      <CheckIcon
        backgroundColor={
          value
            ? ( accentSelected
              ? getActiveColorOrFallback(['accent3'])
              : getActiveColorOrFallback('shade7')
            ) : 'transparent'
        }
        outlineColor={ value ? 'transparent' : getActiveColorOrFallback(['shade7']) }
        checkColor={ value ? getActiveColorOrFallback(['shade0'], true) : 'transparent' }
      />
      <span className={ styles.label }>{ label }</span>
    </label>
  );
};

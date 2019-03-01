import React from 'react';
import { CheckIcon } from './Icons';
import styles from './Checkbox.module.css';
import ColorState from './ColorState';

export default ({ className, value, accentSelected, onChange, label }) => (
  <ColorState>
    { ({ getColor }) => (
      <label
        className={ [styles.wrapper, className].join(' ') }
        style={{
          color: value && accentSelected
            ? getColor('accent3', 'shade7')
            : getColor('shade7'),
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
              ? ( accentSelected ? getColor('accent3', 'shade7')
              : getColor('shade7')) : 'transparent'
          }
          outlineColor={ value ? 'transparent' : getColor('shade7') }
          checkColor={ value ? getColor('shade0') : 'transparent' }
        />
        <span className={ styles.label }>{ label }</span>
      </label>
    ) }
  </ColorState>
);

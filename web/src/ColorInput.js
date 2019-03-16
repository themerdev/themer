import React, { useRef, useContext } from 'react';
import { DropletIcon } from './Icons';
import styles from './ColorInput.module.css';
import getBestForeground from './getBestForeground';
import colorSupport from './colorInputSupport';
import ThemeContext from './ThemeContext';

export default ({ className, style, colorKey, help }) => {
  const textInput = useRef(null);
  const {
    getActiveColorOrFallback,
    getActiveRawColor,
    setActiveRawColor,
  } = useContext(ThemeContext);
  return (
    <div className={ [styles.outerWrapper, className].join(' ') } style={ style }>
      <div className={ styles.inputsWrapper }>
        <label className={ styles.textInputWrapper } style={{ color: getActiveColorOrFallback(['shade7']) }}>
          <span className={ styles.label }>{ colorKey }:</span>
          <input
            type="text"
            className={ styles.textInput }
            style={{
              color: getActiveColorOrFallback(['shade7']),
              borderBottomColor: getActiveColorOrFallback([colorKey]),
            }}
            value={ getActiveRawColor(colorKey) }
            onChange={ evt => setActiveRawColor(colorKey, evt.target.value) }
            ref={ textInput }
          />
        </label>
        <label
          className={ styles.swatch }
          style={{
            color: getBestForeground(
              getActiveColorOrFallback(['shade7']),
              getActiveColorOrFallback(['shade0'], true),
              getActiveColorOrFallback([colorKey]),
            ),
            backgroundColor: getActiveColorOrFallback([colorKey]),
          }}
          tabIndex="-1"
          onClick={ evt => {
            if(!colorSupport) {
              evt.preventDefault();
              textInput.current.focus()
            }
          } }
        >
          <DropletIcon />
          <input
            aria-label={ `${colorKey} color picker` }
            type="color"
            className={ styles.colorInput }
            value={ getActiveColorOrFallback([colorKey], colorKey === 'shade0') }
            onChange={ evt => setActiveRawColor(colorKey, evt.target.value) }
            tabIndex="-1"
          />
        </label>
      </div>
      <div className={ styles.help } style={{ color: getActiveColorOrFallback(['shade4']) }}>{ help }</div>
    </div>
  )
};

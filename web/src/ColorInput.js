import React, { useRef } from 'react';
import ColorState from './ColorState';
import { DropletIcon } from './Icons';
import styles from './ColorInput.module.css';
import getBestForeground from './getBestForeground';
import colorSupport from './colorInputSupport';

export default ({ className, style, colorKey, help }) => {
  const textInput = useRef(null);
  return (
    <ColorState>
      { ({ getColor, getRawColor, setColor }) => (
        <div className={ [styles.outerWrapper, className].join(' ') } style={ style }>
          <div className={ styles.inputsWrapper }>
            <label className={ styles.textInputWrapper } style={{ color: getColor('shade7') }}>
              <span className={ styles.label }>{ colorKey }:</span>
              <input
                type="text"
                className={ styles.textInput }
                style={{
                  color: getColor('shade7'),
                  borderBottomColor: getColor(colorKey, 'shade7'),
                }}
                value={ getRawColor(colorKey) }
                onChange={ evt => setColor(colorKey, evt.target.value) }
                ref={ textInput }
              />
            </label>
            <label
              className={ styles.swatch }
              style={{
                color: getBestForeground(
                  getColor('shade7'),
                  getColor('shade0'),
                  getColor(colorKey, 'shade7'),
                ),
                backgroundColor: getColor(colorKey, 'shade7'),
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
                type="color"
                className={ styles.colorInput }
                value={ getColor(colorKey) }
                onChange={ evt => setColor(colorKey, evt.target.value) }
                tabIndex="-1"
              />
            </label>
          </div>
          <div className={ styles.help } style={{ color: getColor('shade4', 'shade7') }}>{ help }</div>
        </div>
      ) }
    </ColorState>
  )
};

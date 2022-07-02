import { useRef, useContext, useCallback } from 'react';
import { debounce } from 'lodash';
import numeral from 'numeral';
import { DropletIcon } from './Icons';
import styles from './ColorInput.module.css';
import getBestForeground from './getBestForeground';
import colorSupport from './colorInputSupport';
import ThemeContext from './ThemeContext';

const ColorInput = ({ className, style, colorKey, help }) => {
  const textInput = useRef(null);
  const {
    getActiveColorOrFallback,
    getActiveRawColor,
    setActiveRawColor,
    getActiveContrastFromBackground,
  } = useContext(ThemeContext);
  const debouncedLogEvent = useCallback(
    (...args) => debounce(window.__ssa__log, 1000)(...args),
    [],
  );
  const debouncedSetActiveRawColor = useCallback(
    (...args) => debounce(setActiveRawColor, 100)(...args),
    [setActiveRawColor],
  );
  const contrast =
    colorKey === 'shade0'
      ? null
      : numeral(getActiveContrastFromBackground(colorKey)).format('0.00');
  return (
    <div
      className={[styles.outerWrapper, className].join(' ')}
      style={style}
      title={contrast && `Contrast ratio: ${contrast}`}
    >
      <div className={styles.inputsWrapper}>
        <label
          className={styles.textInputWrapper}
          style={{ color: getActiveColorOrFallback(['shade7']) }}
        >
          <span className={styles.label}>{colorKey}:</span>
          <input
            type='text'
            className={styles.textInput}
            style={{
              color: getActiveColorOrFallback(['shade7']),
              borderBottomColor: getActiveColorOrFallback([colorKey]),
            }}
            value={getActiveRawColor(colorKey)}
            onChange={(evt) => {
              setActiveRawColor(colorKey, evt.target.value);
              debouncedLogEvent('change raw color', { inputType: 'text' });
            }}
            ref={textInput}
          />
        </label>
        <label
          className={styles.swatch}
          style={{
            color: getBestForeground(
              getActiveColorOrFallback(['shade7']),
              getActiveColorOrFallback(['shade0'], true),
              getActiveColorOrFallback([colorKey]),
            ),
            backgroundColor: getActiveColorOrFallback([colorKey]),
          }}
          tabIndex='-1'
          onClick={(evt) => {
            if (!colorSupport) {
              evt.preventDefault();
              textInput.current.focus();
            }
          }}
        >
          <DropletIcon />
          <input
            aria-label={`${colorKey} color picker`}
            type='color'
            className={styles.colorInput}
            value={getActiveColorOrFallback([colorKey], colorKey === 'shade0')}
            onChange={(evt) => {
              debouncedSetActiveRawColor(colorKey, evt.target.value);
              debouncedLogEvent('change raw color', { inputType: 'color' });
            }}
            tabIndex='-1'
          />
        </label>
      </div>
      <div
        className={styles.help}
        style={{ color: getActiveColorOrFallback(['shade4']) }}
      >
        {help}
      </div>
    </div>
  );
};

export default ColorInput;

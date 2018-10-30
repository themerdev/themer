import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import { Droplet } from './Icons';
import styles from './ColorInput.module.css';
import getBestForeground from './getBestForeground';

export default class ColorInput extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor, getRawColor, setColor }) => (
          <div className={ [styles.outerWrapper, this.props.className].join(' ') } style={ this.props.style }>
            <div className={ styles.inputsWrapper }>
              <label className={ styles.textInputWrapper } style={{ color: getColor('shade7') }}>
                <span className={ styles.label }>{ this.props.colorKey }:</span>
                <input
                  type="text"
                  className={ styles.textInput }
                  style={{
                    color: getColor('shade7'),
                    borderBottomColor: getColor(this.props.colorKey, 'shade7'),
                  }}
                  value={ getRawColor(this.props.colorKey) }
                  onChange={ evt => setColor(this.props.colorKey, evt.target.value) }
                />
              </label>
              <label
                className={ styles.swatch }
                style={{
                  color: getBestForeground(
                    getColor('shade7'),
                    getColor('shade0'),
                    getColor(this.props.colorKey, 'shade7'),
                  ),
                  backgroundColor: getColor(this.props.colorKey, 'shade7'),
                }}
                tabIndex="0"
              >
                <Droplet />
                <input
                  type="color"
                  className={ styles.colorInput }
                  value={ getColor(this.props.colorKey) }
                  onChange={ evt => setColor(this.props.colorKey, evt.target.value) }
                  tabIndex="-1"
                />
              </label>
            </div>
            <div className={ styles.help } style={{ color: getColor('shade4', 'shade7') }}>{ this.props.help }</div>
          </div>
        ) }
      </ColorState>
    )
  }
}

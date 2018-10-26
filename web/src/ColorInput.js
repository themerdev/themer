import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import { Droplet } from './Icons';
import './ColorInput.css';
import getBestForeground from './getBestForeground';

export default class ColorInput extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor, getRawColor, setColor }) => (
          <div className="color-input">
            <div className="inputs-wrapper">
              <label style={{ color: getColor('shade7') }}>
                <span className="label">{ this.props.colorKey }</span>
                <input
                  type="text"
                  style={{
                    color: getColor('shade7'),
                    borderBottomColor: getColor(this.props.colorKey, 'shade7'),
                  }}
                  value={ getRawColor(this.props.colorKey) }
                  onChange={ evt => setColor(this.props.colorKey, evt.target.value) }
                />
              </label>
              <label
                className="swatch"
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
                  value={ getRawColor(this.props.colorKey) }
                  onChange={ evt => setColor(this.props.colorKey, evt.target.value) }
                  tabIndex="-1"
                />
              </label>
            </div>
            <div className="help" style={{ color: getColor('shade4', 'shade7') }}>{ this.props.help }</div>
          </div>
        ) }
      </ColorState>
    )
  }
}

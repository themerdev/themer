import React, { PureComponent } from 'react';
import { Check } from './Icons';
import './Checkbox.css';
import ColorState from './ColorState';

export default class Checkbox extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <label className="wrapper" style={{ color: getColor('shade7') }}>
            <input
              type="checkbox"
              checked={ this.props.value }
              onChange={ evt => this.props.onChange(evt.target.checked) }
            />
            <Check
              backgroundColor={ this.props.value ? getColor('shade7') : 'transparent' }
              outlineColor={ this.props.value ? 'transparent' : getColor('shade7') }
              checkColor={ this.props.value ? getColor('shade0') : 'transparent' }
            />
            <span className="label">{ this.props.label }</span>
          </label>
        ) }
      </ColorState>
    );
  }
}

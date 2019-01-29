import React, { PureComponent } from 'react';
import { CheckIcon } from './Icons';
import styles from './Checkbox.module.css';
import ColorState from './ColorState';

export default class Checkbox extends PureComponent {
  onKeyDown = evt => {
    if (evt.key === ' ' || evt.key === 'Enter') {
      evt.preventDefault();
      this.props.onChange(!this.props.value);
    }
  }
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <label
            className={ [styles.wrapper, this.props.className].join(' ') }
            style={{
              color: this.props.value && this.props.accentSelected
                ? getColor('accent3', 'shade7')
                : getColor('shade7'),
            }}
            tabIndex="0"
            onKeyDown={ this.onKeyDown }
          >
            <input
              type="checkbox"
              className={ styles.input }
              checked={ this.props.value }
              onChange={ evt => this.props.onChange(evt.target.checked) }
            />
            <CheckIcon
              backgroundColor={
                this.props.value
                  ? ( this.props.accentSelected ? getColor('accent3', 'shade7')
                  : getColor('shade7')) : 'transparent'
              }
              outlineColor={ this.props.value ? 'transparent' : getColor('shade7') }
              checkColor={ this.props.value ? getColor('shade0') : 'transparent' }
            />
            <span className={ styles.label }>{ this.props.label }</span>
          </label>
        ) }
      </ColorState>
    );
  }
}

import React, { PureComponent } from 'react';
import { RadioIcon } from './Icons';
import ColorState from './ColorState';
import styles from './Radio.module.css';

export default class Radio extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <label
            className={ styles.wrapper }
            style={{ color: getColor('shade7') }}
          >
            <input
              type="radio"
              className={ styles.input }
              checked={ this.props.value }
              onChange={ evt => this.props.onChange(evt.target.checked) }
            />
            <RadioIcon selected={ this.props.value } />
            <span className={ styles.label }>{ this.props.label }</span>
          </label>
        ) }
      </ColorState>
    );
  }
}

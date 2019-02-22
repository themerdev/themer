import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import styles from './Button.module.css';

export default class Button extends PureComponent {
  focus() {
    this.button.focus();
  }
  getColorKeys() {
    if (this.props.disabled) {
      return ['shade3', 'shade0'];
    } else if (this.props.small || this.props.special) {
      return ['shade7'];
    } else {
      return ['accent4', 'shade6', 'shade7'];
    }
  }
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <button
            className={ [
              styles.button,
              this.props.small && styles.small,
              this.props.special && styles.special,
              this.props.className,
            ].filter(Boolean).join(' ') }
            data-text="Download"
            style={{
              color: getColor(...this.getColorKeys()),
              '--button-resting-background-color': getColor('shade1', 'shade0'),
              '--button-hover-background-color': getColor('shade2', 'shade0'),
              '--button-active-background-color': getColor('shade0'),
              '--button-special-color-1': getColor('accent1', 'shade7'),
              '--button-special-color-2': getColor('accent7', 'shade7'),
            }}
            onClick={ this.props.onClick }
            disabled={ this.props.disabled }
            ref={ n => this.button = n }
          >{ this.props.children }</button>
        ) }
      </ColorState>
    );
  }
}

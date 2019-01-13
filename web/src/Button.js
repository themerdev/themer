import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import styles from './Button.module.css';

export default class Button extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <button
            className={ `${styles.button} ${this.props.className || ''}` }
            style={{
              color: this.props.disabled ? getColor('shade3', 'shade0') : getColor('accent4', 'shade6', 'shade7'),
              '--button-resting-background-color': getColor('shade1', 'shade0'),
              '--button-hover-background-color': getColor('shade2', 'shade0'),
              '--button-active-background-color': getColor('shade0'),
            }}
            onClick={ this.props.onClick }
            disabled={ this.props.disabled }
          >{ this.props.children }</button>
        ) }
      </ColorState>
    );
  }
}

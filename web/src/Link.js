import React, { PureComponent } from 'react';
import ColorState from './ColorState';

export default class Link extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <a
            style={{ color: getColor('accent5', 'shade7') }}
            { ...this.props }
          >{ this.props.children }</a>
        ) }
      </ColorState>
    )
  }
}

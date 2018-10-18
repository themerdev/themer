import React, { PureComponent } from 'react';
import { UrlStateConsumer } from './UrlState';

export default class Color extends PureComponent {
  render() {
    return (
      <UrlStateConsumer>
        { ({ getValueOrFallback }) => this.props.children(
          (...args) => getValueOrFallback(
            [...args].map(colorKey => [
              'colors',
              getValueOrFallback([['activeColorSet']]),
              colorKey
            ]),
            true,
          )
        ) }
      </UrlStateConsumer>
    );
  }
}

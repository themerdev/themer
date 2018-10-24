import React, { PureComponent } from 'react';
import { UrlStateConsumer } from './UrlState';
import { get } from 'lodash';

export default class Color extends PureComponent {
  render() {
    return (
      <UrlStateConsumer>
        { ({ getValueOrFallback, mergeState, rawState }) => this.props.children({
          getColor: (...args) => getValueOrFallback(
              [...args].map(colorKey => [
                'colors',
                getValueOrFallback([['activeColorSet']]),
                colorKey
              ]),
              true,
            ),
          setColor: (key, value) => {
            mergeState({
              colors: {
                [getValueOrFallback([['activeColorSet']])]: {
                  [key]: value,
                }
              }
            });
          },
          getRawColor: key => get(rawState, ['colors', getValueOrFallback([['activeColorSet']]), key], ''),
        }) }
      </UrlStateConsumer>
    );
  }
}

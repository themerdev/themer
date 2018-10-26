import React, { PureComponent } from 'react';
import { UrlStateConsumer } from './UrlState';

export default class CalculateIntermediaryShadesState extends PureComponent {
  render() {
    return (
      <UrlStateConsumer>
        { ({ getValueOrFallback, mergeState }) => this.props.children({
          getValue: () => getValueOrFallback(
            [[
              'calculateIntermediaryShades',
              getValueOrFallback([['activeColorSet']])
            ]],
            v => v === 'true',
          ),
          setValue: v => mergeState({
            calculateIntermediaryShades: {
              [getValueOrFallback([['activeColorSet']])]: v
            }
          }),
        }) }
      </UrlStateConsumer>
    );
  }
}

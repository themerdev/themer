import React from 'react';
import { UrlStateConsumer } from './UrlState';
import { get } from 'lodash';
import colorSteps from 'color-steps';
import Color from 'color';
import CalculateIntermediaryShadesState from './CalculateIntermediaryShadesState';

export default ({ children }) => (
  <CalculateIntermediaryShadesState>
    { ({ getValue: shouldCalculateIntermediaryShades }) => (
      <UrlStateConsumer>
        { ({ getValueOrFallback, mergeState, rawState }) => children({
          getColor: (...args) => {
            const parse = v => Color(v).hex();
            const calculatedState = (() => {
              if (shouldCalculateIntermediaryShades()) {
                try {
                  const calculatedColors = colorSteps(
                    parse(get(rawState, ['colors', getValueOrFallback([['activeColorSet']]), 'shade0'], '')),
                    parse(get(rawState, ['colors', getValueOrFallback([['activeColorSet']]), 'shade7'], '')),
                  );
                  return {
                    colors: {
                      [getValueOrFallback([['activeColorSet']])]: calculatedColors.reduce(
                        (shades, color, idx) => ({
                          ...shades,
                          [`shade${idx+1}`]: color,
                        }),
                        {},
                      )
                    },
                  };
                } catch {}
              }
              return {};
            })();
            return getValueOrFallback(
              args.map(colorKey => [
                'colors',
                getValueOrFallback([['activeColorSet']]),
                colorKey
              ]),
              parse,
              calculatedState,
            );
          },
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
    ) }
  </CalculateIntermediaryShadesState>
);

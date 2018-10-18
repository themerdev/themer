import React from 'react';
import { UrlStateConsumer } from './UrlState';

export default function Color ({ children, colorKeys }) {
  return (
    <UrlStateConsumer>
      { ({ getValueOrFallback }) => children(
        getValueOrFallback(
          colorKeys.map(colorKey => [
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

import React from 'react';
import { UrlStateConsumer } from './UrlState';

export default function Color ({ children, colorKeys }) {
  return (
    <UrlStateConsumer>
      { ({ getCascadedState }) => children(
        getCascadedState(
          colorKeys.map(colorKey => [
            'colors',
            getCascadedState(['activeColorSet']),
            colorKey
          ])
        )
      ) }
    </UrlStateConsumer>
  );
}

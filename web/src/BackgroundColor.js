import React from 'react';
import Color from './Color';

export default function BackgroundColor ({ children }) {
  return (
    <Color colorKeys={[ 'shade0' ]}>
      { color => children(color) }
    </Color>
  );
}

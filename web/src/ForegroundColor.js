import React from 'react';
import Color from './Color';

export default function ForegroundColor ({ children }) {
  return (
    <Color colorKeys={[ 'shade7' ]}>
      { color => children(color) }
    </Color>
  );
}

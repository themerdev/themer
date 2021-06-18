import React from 'react';
import Color from 'color';
import styles from './Banner.module.css';

export default ({ className, color, children }) => (
  <div
    role='alert'
    className={[className, styles.banner].filter(Boolean).join(' ')}
    style={{
      color,
      backgroundColor: Color(color).fade(0.9).hsl(),
    }}
  >
    {children}
  </div>
);

import React from 'react';
import ColorState from './ColorState';
import styles from './Tabs.module.css';

export default ({ children }) => (
  <ColorState>
    { ({ getColor }) => children({
      tabClassName: styles.tab,
      getTabStyle: active => ({
        backgroundColor: active ? getColor('shade0') : getColor('shade2', 'shade0'),
        color: getColor('shade7'),
        borderColor: getColor('shade7'),
        '--tab-bottom-overlap-color': active ? getColor('shade0') : getColor('shade2', 'shade0'),
        '--tab-bottom-overlap-size': active ? 'calc(var(--border-size) * 2)' : 'var(--border-size)',
      }),
      contentClassName: styles.tabContent,
      contentStyle: {
        borderColor: getColor('shade7'),
        backgroundColor: getColor('shade0'),
      },
    }) }
  </ColorState>
);

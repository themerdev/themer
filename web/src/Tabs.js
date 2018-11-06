import React, { PureComponent } from 'react';
import ColorState from './ColorState';
import styles from './Tabs.module.css';

export default class Tabs extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => this.props.children({
          tabClassName: styles.tab,
          getTabStyle: active => ({
            backgroundColor: active ? getColor('shade0') : getColor('shade2', 'shade0'),
            color: getColor('shade7'),
            borderTopColor: getColor('shade7'),
            borderRightColor: getColor('shade7'),
            borderBottomColor: active ? getColor('shade0') : getColor('shade7'),
            borderLeftColor: getColor('shade7'),
          }),
          contentClassName: styles.tabContent,
          contentStyle: { borderColor: getColor('shade7') },
        }) }
      </ColorState>
    );
  }
}

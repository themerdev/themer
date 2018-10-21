import React, { PureComponent } from 'react';
import { UrlStateConsumer } from './UrlState';
import './ColorSetInputs.css';
import Color from './Color';

export default class ColorSetInputs extends PureComponent {
  render() {
    return (
      <section>
        <UrlStateConsumer>
          { ({ getValueOrFallback, mergeState }) => {
            const isDark = getValueOrFallback(['activeColorSet']) === 'dark';
            return (
              <Color>
                { getColor => {
                  const getTabStyle = active => ({
                    backgroundColor: active ? getColor('shade0') : getColor('shade2', 'shade0'),
                    color: getColor('shade7'),
                    borderTopColor: getColor('shade7'),
                    borderRightColor: getColor('shade7'),
                    borderBottomColor: active ? getColor('shade0') : getColor('shade7'),
                    borderLeftColor: getColor('shade7'),
                  });
                  return (
                    <div className="tab-container">
                      <button
                        style={ getTabStyle(isDark) }
                        onClick={ () => mergeState({ activeColorSet: 'dark' }) }
                      >Dark Variant</button>
                      <button
                        style={ getTabStyle(!isDark) }
                        onClick={ () => mergeState({ activeColorSet: 'light' }) }
                      >Light Variant</button>
                    </div>
                  );
                } }
              </Color>
            );
          } }
        </UrlStateConsumer>
      </section>
    );
  }
}

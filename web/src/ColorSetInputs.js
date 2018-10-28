import React, { PureComponent } from 'react';
import { UrlStateConsumer } from './UrlState';
import './ColorSetInputs.css';
import ColorState from './ColorState';
import ColorInput from './ColorInput';
import Checkbox from './Checkbox';
import CalculateIntermediaryShadesState from './CalculateIntermediaryShadesState';

export default class ColorSetInputs extends PureComponent {
  render() {
    return (
      <UrlStateConsumer>
        { ({ getValueOrFallback, mergeState }) => {
          const isDark = getValueOrFallback([['activeColorSet']]) === 'dark';
          return (
            <ColorState>
              { ({ getColor }) => {
                const getTabStyle = active => ({
                  backgroundColor: active ? getColor('shade0') : getColor('shade2', 'shade0'),
                  color: getColor('shade7'),
                  borderTopColor: getColor('shade7'),
                  borderRightColor: getColor('shade7'),
                  borderBottomColor: active ? getColor('shade0') : getColor('shade7'),
                  borderLeftColor: getColor('shade7'),
                });
                return (
                  <>
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
                    <div className="input-container" style={{ borderColor: getColor('shade7') }}>
                      <ColorInput colorKey="shade0" help="background color" />
                      <CalculateIntermediaryShadesState>
                        { ({ getValue }) => !getValue() && (
                          <>
                            <ColorInput colorKey="shade1" help="UI" />
                            <ColorInput colorKey="shade2" help="UI, text selection" />
                            <ColorInput colorKey="shade3" help="UI, code comments" />
                            <ColorInput colorKey="shade4" help="UI" />
                            <ColorInput colorKey="shade5" help="UI" />
                            <ColorInput colorKey="shade6" help="foreground text" />
                          </>
                        ) }
                      </CalculateIntermediaryShadesState>
                      <ColorInput colorKey="shade7" help="foreground text" />
                      <CalculateIntermediaryShadesState>
                        { ({ getValue, setValue }) => (
                          <Checkbox
                            label="calculate intermediary shades"
                            value={ getValue() }
                            onChange={ setValue }
                          />
                        ) }
                      </CalculateIntermediaryShadesState>
                      <ColorInput colorKey="accent0" help="error, vcs deletion" />
                      <ColorInput colorKey="accent1" help="syntax" />
                      <ColorInput colorKey="accent2" help="warning, vcs modification" />
                      <ColorInput colorKey="accent3" help="success, vcs addition" />
                      <ColorInput colorKey="accent4" help="syntax" />
                      <ColorInput colorKey="accent5" help="syntax" />
                      <ColorInput colorKey="accent6" help="syntax, caret/cursor" />
                      <ColorInput colorKey="accent7" help="syntax, special" />
                    </div>
                  </>
                );
              } }
            </ColorState>
          );
        } }
      </UrlStateConsumer>
    );
  }
}

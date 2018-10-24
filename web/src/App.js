import React, { PureComponent } from 'react';
import './App.css';
import { UrlStateProvider } from './UrlState';

import Color from './Color';
import ColorSetInputs from './ColorSetInputs';

export default class App extends PureComponent {
  render() {
    return (
      <UrlStateProvider history={ this.props.history }>
        <Color>
          { ({ getColor }) => (
            <div className="app" style={{ backgroundColor: getColor('shade0') }}>
              <div className="container">
                <h1 style={{ color: getColor('shade7') }}>themer</h1>
                <hr style={{
                  backgroundImage: `
                    linear-gradient(
                      to right,
                      ${getColor('accent0', 'shade2', 'shade7')},
                      ${getColor('accent1', 'shade2', 'shade7')},
                      ${getColor('accent2', 'shade2', 'shade7')},
                      ${getColor('accent3', 'shade2', 'shade7')},
                      ${getColor('accent4', 'shade2', 'shade7')},
                      ${getColor('accent4', 'shade2', 'shade7')},
                      ${getColor('accent5', 'shade2', 'shade7')},
                      ${getColor('accent6', 'shade2', 'shade7')},
                      ${getColor('accent7', 'shade2', 'shade7')}
                    )
                  `,
                }}></hr>
                <p style={{ color: getColor('shade5', 'shade7')}}>themer takes a set of colors and generates themes for your apps (editors, terminals, wallpapers, and more).</p>
                <h2 style={{ color: getColor('shade6', 'shade7')}}>1. Define colors</h2>
                <ColorSetInputs />
              </div>
            </div>
          ) }
        </Color>
      </UrlStateProvider>
    );
  }
}

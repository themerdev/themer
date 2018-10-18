import React, { Component } from 'react';
import './App.css';
import { UrlStateProvider } from './UrlState';

import Color from './Color';

export default class App extends Component {
  render() {
    return (
      <UrlStateProvider history={ this.props.history }>
        <Color>
          { getColor => (
            <div className="app" style={{ backgroundColor: getColor('shade0') }}>
              <div className="container">
                <h1 style={{ color: getColor('shade7'), borderBottomColor: getColor('shade4', 'shade7') }}>themer</h1>
                <p style={{ color: getColor('shade6', 'shade7')}}>themer takes a color set and generates...</p>
              </div>
            </div>
          ) }
        </Color>
      </UrlStateProvider>
    );
  }
}

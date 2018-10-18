import React, { Component } from 'react';
import './App.css';
import { UrlStateProvider } from './UrlState';

import BackgroundColor from './BackgroundColor';
import ForegroundColor from './ForegroundColor';

export default class App extends Component {
  render() {
    return (
      <UrlStateProvider history={ this.props.history }>
        <BackgroundColor>
          { backgroundColor => (
            <div className="app" style={{ backgroundColor }}>
              <div className="container">
                <ForegroundColor>
                  { color => (
                    <h1 style={{ color }}>[logo] themer</h1>
                  ) }
                </ForegroundColor>
              </div>
            </div>
          ) }
        </BackgroundColor>
      </UrlStateProvider>
    );
  }
}

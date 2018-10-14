import React, { Component } from 'react';
import './App.css';
import { UrlStateProvider } from './UrlState';

import ForegroundColor from './ForegroundColor';

export default class App extends Component {
  render() {
    return (
      <UrlStateProvider>
        <div className="app">
          <ForegroundColor>
            { color => (
              <h1 style={{ color }}>themer</h1>
            ) }
          </ForegroundColor>
        </div>
      </UrlStateProvider>
    );
  }
}

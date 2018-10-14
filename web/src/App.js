import React, { Component } from 'react';
import './App.css';
import { UrlStateProvider, UrlStateConsumer } from './UrlState';

class App extends Component {
  render() {
    return (
      <UrlStateProvider>
        <UrlStateConsumer>
          { ({ urlState, mergeState }) => (
            <>
              <pre>
                <code>
                  { JSON.stringify(urlState, null, 2) }
                </code>
              </pre>
              <button onClick={ () => mergeState({ hello: 'world' + Math.random() }) }>HW</button>
            </>
          ) }
        </UrlStateConsumer>
      </UrlStateProvider>
    );
  }
}

export default App;

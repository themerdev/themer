import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO: Start here. Add some of the work you started in the other window. Maybe rebuild it and see if you get a better result.

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

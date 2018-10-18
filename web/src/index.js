import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'reset.css/reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(<App history={ history } />, document.getElementById('root'));
serviceWorker.register();

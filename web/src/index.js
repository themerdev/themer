import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'reset.css/reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  (<StrictMode><App history={ history } /></StrictMode>),
  document.getElementById('root'),
);
serviceWorker.register({
  onUpdate: () => {
    window.dispatchEvent(
      new CustomEvent(
        'notificationmessage',
        { detail: 'themer has been updated and cached. Reload to use the latest version.' },
      ),
    );
  },
});

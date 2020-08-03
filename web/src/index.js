import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import 'reset.css/reset.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: "https://9f43906c1ad243f4a3ee46f26e1ad0b2@o390880.ingest.sentry.io/5236092",
  environment: process.env.NODE_ENV,
  release: process.env.REACT_APP_VERSION,
});

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
        { detail: 'themer has been updated and cached. Close all themer tabs and reopen to use the latest version.' },
      ),
    );
  },
});

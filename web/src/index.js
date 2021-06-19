import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import 'reset.css/reset.css';
import './index.css';
import App from './App';
import { register } from './serviceWorkerRegistration';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://9f43906c1ad243f4a3ee46f26e1ad0b2@o390880.ingest.sentry.io/5236092',
  environment: process.env.NODE_ENV,
  release: process.env.REACT_APP_VERSION,
});

const history = createBrowserHistory();

ReactDOM.render(
  <StrictMode>
    <App history={history} />
  </StrictMode>,
  document.getElementById('root'),
);

register({
  onSuccess: () => {
    window.dispatchEvent(
      new CustomEvent('notificationmessage', {
        detail: 'themer.dev has been cached locally for offline use.',
      }),
    );
  },
  onUpdate: () => {
    window.dispatchEvent(
      new CustomEvent('notificationmessage', {
        detail:
          'themer.dev has been upgraded. Reload to get the latest version.',
      }),
    );
  },
});

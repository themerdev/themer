import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import 'reset.css/reset.css';
import './index.css';
import App from './App';
import { register } from './serviceWorkerRegistration';

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

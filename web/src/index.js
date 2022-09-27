import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'reset.css/reset.css';
import './index.css';
import Route, { DASHBOARD_ROUTE, LOGIN_ROUTE } from './Route';
import App from './App';
import Login from './admin/Login';
import OAuthGitHub from './admin/OAuthGitHub';
import { register } from './serviceWorkerRegistration';
import Dashboard from './admin/Dashboard';
import Logout from './admin/Logout';
import StripeAccountLink from './admin/StripeAccountLink';
import Admin from './admin/Admin';
import ThemeRedirect from './ThemeRedirect';
import Newsletter from './Newsletter';

ReactDOM.render(
  <StrictMode>
    <Route path='/' element={<App />} />
    <Route path='/victor-mono' element={<ThemeRedirect slug='victor-mono' />} />
    <Route path='/future-pro' element={<ThemeRedirect slug='future-pro' />} />
    <Route path='/jamstacker' element={<ThemeRedirect slug='jamstacker' />} />
    <Route path='/join' element={<Newsletter />} />
    <Route
      path={LOGIN_ROUTE}
      requiresNoAuth
      element={
        <Admin>
          <Login />
        </Admin>
      }
    />
    <Route
      path='/oauth-github'
      requiresNoAuth
      element={
        <Admin>
          <OAuthGitHub />
        </Admin>
      }
    />
    <Route
      path={DASHBOARD_ROUTE}
      requiresAuth
      element={
        <Admin>
          <Dashboard />
        </Admin>
      }
    />
    <Route
      path='/stripe-account-onboarding'
      requiresAuth
      element={
        <Admin>
          <StripeAccountLink type='onboarding' />
        </Admin>
      }
    />
    <Route
      path='/stripe-account-dashboard'
      requiresAuth
      element={
        <Admin>
          <StripeAccountLink type='dashboard' />
        </Admin>
      }
    />
    <Route
      path='/logout'
      element={
        <Admin>
          <Logout />
        </Admin>
      }
    />
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

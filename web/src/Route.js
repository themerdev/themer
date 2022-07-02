import { useEffect } from 'react';
import useAuth from './useAuth';
import useHistory from './useHistory';

export const LOGIN_ROUTE = '/login';
export const DASHBOARD_ROUTE = '/dashboard';

export const Redirect = ({ path }) => {
  const { replace } = useHistory();
  useEffect(() => {
    replace(path);
  });
  return null;
};

const Route = ({ path, element, requiresAuth, requiresNoAuth }) => {
  const { pathname } = useHistory();
  const { token } = useAuth();
  const content = path === pathname ? element : null;
  if (content === null) return null;
  if (requiresAuth && !token) {
    return <Redirect path={LOGIN_ROUTE} />;
  }
  if (requiresNoAuth && !!token) {
    return <Redirect path={DASHBOARD_ROUTE} />;
  }
  return content;
};

export default Route;

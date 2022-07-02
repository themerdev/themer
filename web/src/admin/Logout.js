import { useEffect } from 'react';
import useAuth from '../useAuth';
import { LOGIN_ROUTE, Redirect } from '../Route';
import styles from './Logout.module.css';

const Logout = () => {
  const { token, setToken } = useAuth();
  useEffect(() => {
    setToken(null);
  });
  return (
    <div className={styles.container}>
      {token ? <span>logging out...</span> : <Redirect path={LOGIN_ROUTE} />}
    </div>
  );
};

export default Logout;

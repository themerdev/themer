import { useEffect } from 'react';
import useAuth from '../useAuth';
import useHistory from '../useHistory';
import styles from './OAuthGitHub.module.css';

const OAuthGitHub = () => {
  const { push } = useHistory();
  const { setToken } = useAuth();
  useEffect(() => {
    (async () => {
      const url = new URL('/api/oauth-github', window.location.origin);
      url.search = window.location.search;
      const { token } = await fetch(url).then((res) => res.json());
      setToken(token);
      push('/dashboard');
    })();
  }, [setToken, push]);
  return (
    <div className={styles.container}>
      <span>loading...</span>
    </div>
  );
};

export default OAuthGitHub;

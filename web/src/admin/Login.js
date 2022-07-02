import { useEffect, useState } from 'react';
import randomToken from '../randomToken';
import styles from './Login.module.css';
import Link from '../Link';

const Login = () => {
  const [csrfToken, setCsrfToken] = useState();
  useEffect(() => {
    const rand = randomToken();
    document.cookie = [
      `csrf_token=${rand}`,
      `max_age=${60 * 60 * 10}`,
      'samesite',
    ].join('; ');
    setCsrfToken(rand);
  }, []);
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', process.env.REACT_APP_GITHUB_CLIENT_ID);
  url.searchParams.set('state', csrfToken);
  return (
    <div className={styles.container}>
      <Link href={url.toString()}>Log in with GitHub</Link>
    </div>
  );
};

export default Login;

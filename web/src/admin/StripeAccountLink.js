import { useEffect } from 'react';
import useAuth from '../useAuth';
import styles from './StripeAccountLink.module.css';

const StripeAccountLink = ({ type }) => {
  const { authFetch } = useAuth();
  useEffect(() => {
    (async () => {
      const { url } = await authFetch(
        `/api/stripe-account-link?type=${encodeURIComponent(type)}`,
      );
      window.location.href = url;
    })();
  });
  return (
    <div className={styles.container}>
      <span>loading...</span>
    </div>
  );
};

export default StripeAccountLink;

import useSWR from 'swr';
import useAuth from '../useAuth';

const ENDPOINT = '/api/stripe-account';

export default function useStripeAccount() {
  const { authFetch } = useAuth();
  const { data, error } = useSWR(ENDPOINT, authFetch, {
    errorRetryCount: 0,
  });
  return {
    stripeAccount: data,
    loadingStripeAccount: data === undefined && error === undefined,
    error,
  };
}

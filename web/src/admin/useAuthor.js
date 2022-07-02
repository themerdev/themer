import { useCallback } from 'react';
import useSWR from 'swr';
import useAuth from '../useAuth';

const ENDPOINT = '/api/author';

export default function useAuthor() {
  const { authFetch } = useAuth();
  const { data, error, mutate } = useSWR(ENDPOINT, authFetch, {
    errorRetryCount: 0,
  });
  const setAuthor = useCallback(
    async (data) => {
      mutate(data, false);
      await authFetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      mutate();
    },
    [mutate, authFetch],
  );
  return {
    author: data,
    setAuthor,
    loadingAuthor: data === undefined && error === undefined,
    error,
  };
}

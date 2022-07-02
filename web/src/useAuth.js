import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';

const KEY = 'access-token';

export default function useAuth() {
  const [token, setToken] = useLocalStorage(KEY);
  const authFetch = useCallback(
    async (url, opts) => {
      const res = await fetch(url, {
        ...opts,
        headers: {
          Authorization: `Bearer ${token}`,
          ...(opts && opts.headers),
        },
      });
      if (res.headers.get('content-type') === 'application/json') {
        return await res.json();
      } else {
        return null;
      }
    },
    [token],
  );
  return { token, setToken, authFetch };
}

import { createBrowserHistory } from 'history';
import { useEffect, useState } from 'react';

const history = createBrowserHistory();

export default function useHistory() {
  const [pathname, setPathname] = useState(history.location.pathname);
  const [search, setSearch] = useState(history.location.search);
  useEffect(() => {
    const unlisten = history.listen(({ location }) => {
      setPathname(location.pathname);
      setSearch(location.search);
    });
    return unlisten;
  }, []);
  return {
    pathname,
    search,
    push: history.push,
    replace: history.replace,
  };
}

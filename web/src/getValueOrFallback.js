import { has, get } from 'lodash';

export default function getValueOrFallback(state, fallbackState, paths, parse) {
  for (let path of paths) {
    if (has(state, path)) {
      if (parse) {
        try {
          return parse(get(state, path));
        }
        catch {
          continue;
        }
      }
      else {
        return get(state, path);
      }
    }
    else {
      continue;
    }
  }
  return get(fallbackState, paths[paths.length - 1]);
}

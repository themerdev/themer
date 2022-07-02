import { has, get, merge } from 'lodash';

export default function getValueOrFallback(
  state,
  calculatedState,
  fallbackState,
  paths,
  parse,
) {
  const combinedState = merge({}, state, calculatedState);
  for (let path of paths) {
    if (has(combinedState, path)) {
      if (parse) {
        try {
          return parse(get(combinedState, path));
        } catch {
          continue;
        }
      } else {
        return get(combinedState, path);
      }
    } else {
      continue;
    }
  }
  return get(fallbackState, paths[paths.length - 1]);
}

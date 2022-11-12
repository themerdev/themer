import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default async (name) => {
  try {
    return require.resolve(name);
  } catch {
    try {
      return require.resolve(path.resolve(name));
    } catch {
      throw new Error(`Unable to resolve '${name}'`);
    }
  }
};

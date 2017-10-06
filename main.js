import path from 'path';
import packageJson from './templates/packageJson';
import indexLess from './templates/indexLess';

const flatten = arr => [].concat.apply([], arr);

const getDirectory = name => `themer-atom-ui-${name}`;

export const render = colors =>
  flatten(
    Object.keys(colors)
      .map(key => ({
        name: key,
        colors: colors[key],
      }))
      .map(({name, colors}) => [
        Promise.resolve({
          name: path.join(getDirectory(name), 'package.json'),
          contents: Buffer.from(packageJson(), 'utf8'),
        }),
        Promise.resolve({
          name: path.join(getDirectory(name), 'index.less'),
          contents: Buffer.from(indexLess(name), 'utf8'),
        }),
      ])
  );

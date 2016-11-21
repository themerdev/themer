import path from 'path';
import fs from 'pn/fs';
import minimist from 'minimist';

const args = (parsedArgs => {
  try {
    if (parsedArgs.colors === undefined) {
      throw new Error('Please provide a package name or file containing colors');
    }
    if (parsedArgs.template === undefined) {
      throw new Error('Please provide at least one template to render');
    }
    if (parsedArgs.out === undefined) {
      throw new Error('Please provide a directory to write output to');
    }
  }
  catch(e) {
    console.error(e.message);
    process.exit(1);
  }
  return {
    ...parsedArgs,
    template: typeof parsedArgs.template === 'string' ? [parsedArgs.template] : parsedArgs.template,
    out: path.resolve(parsedArgs.out),
  };
})(minimist(process.argv.slice(2), {
  string: ['colors', 'template', 'out'],
  alias: {
    'colors': 'c',
    'template': 't',
    'out': 'o',
  },
}));

const resolvePackage = name => new Promise((resolve, reject) => {
  try {
    resolve(require.resolve(name));
  }
  catch(e) {
    try {
      resolve(require.resolve(path.resolve(name)));
    }
    catch(e) {
      reject(`Unable to resolve ${name}`);
    }
  }
});

const flatten = arr => [].concat.apply([], arr);

Promise.all([args.colors, ...args.template].map(resolvePackage))
  .then(requireables => {
    const colors = require(requireables[0]).colors;
    const templates = requireables.slice(1).map(require);
    return Promise.all(flatten(templates.map(template => template.render(colors, args))));
  })
  .then(files => Promise.all(files.map(file => fs.writeFile(path.resolve(args.out, file.name), file.contents).then(() => console.log(`...${file.name}`)))))
  .then(() => console.log('Done!'))
  .catch(e => console.error(e));

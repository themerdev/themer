import path from 'path';
import fs from 'pn/fs';
import mkdirp from 'mkdirp';
import minimist from 'minimist';
import resolvePackage from './resolve';

const log = {
  out: (msg) => { process.stdout.write(`${msg}\n`); },
  err: (msg) => { process.stderr.write(`${msg}\n`); },
};

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
    log.err(e.message);
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

const flatten = arr => [].concat.apply([], arr);

mkdirp.sync(path.resolve(args.out));

log.out('resolving packages...');
Promise.all([args.colors, ...args.template].map(resolvePackage))
  .then(requireables => {
    const colors = require(requireables[0]).colors;
    const templates = requireables.slice(1).map(require);
    log.out('rendering templates...');
    return Promise.all(flatten(templates.map(template => template.render(colors, args))));
  })
  .then(files => {
    log.out('writing files...');
    return Promise.all(files.map(file => fs.writeFile(path.resolve(args.out, file.name), file.contents)));
  })
  .then(() => {
    log.out('Done!');
    process.exit(0);
  })
  .catch(e => {
    log.err(e);
    process.exit(1);
  });

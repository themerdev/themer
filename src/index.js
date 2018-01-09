import path from 'path';
import minimist from 'minimist';
import chalk from 'chalk';
import themer from './themer';

/* eslint-disable no-console */
const log = {
  out: (msg) => { console.log(msg); },
  err: (msg) => { console.error(chalk.red(msg)); },
  info: (msg) => { console.log(chalk.cyan(msg)); },
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

themer(args.colors, args.template, args.out, args).subscribe(
  evt => log.out(evt),
  err => { log.err(err); process.exit(1); },
  () => { log.info('done!'); process.exit(0); },
);

const path = require('path'),
  minimist = require('minimist'),
  themer = require('./themer');

(async function main() {
  try {
    const args = (parsedArgs => {
      if (parsedArgs.colors === undefined) {
        throw new Error('Please provide a package name or file containing colors');
      }
      if (parsedArgs.template === undefined) {
        throw new Error('Please provide at least one template to render');
      }
      if (parsedArgs.out === undefined) {
        throw new Error('Please provide a directory to write output to');
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
    await themer(args.colors, args.template, args.out, args);
    console.log('done!');
    process.exit(0);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

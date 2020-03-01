const path = require('path'),
  minimist = require('minimist'),
  fs = require('fs'),
  { promisify } = require('util'),
  mkdir = promisify(fs.mkdir),
  writeFile = promisify(fs.writeFile),
  resolvePackage = require('./resolve'),
  getColors = require('./get-colors'),
  prepareColors = require('./prepare'),
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
    console.log('resolving packages...');
    const resolvedColorsPath = await resolvePackage(args.colors);
    const rawColors = await getColors(resolvedColorsPath);
    const colors = prepareColors(rawColors);
    const templates = await Promise.all(
      args.template.map(
        async packageName => ({
          name: path.basename(packageName),
          ...require(await resolvePackage(packageName)),
        }),
      ),
    );
    console.log('rendering templates...');
    const outputs = await themer(colors, templates, args);
    console.log('writing files...');
    for (const output of outputs) {
      const outputFilePath = path.resolve(args.out, output.name);
      await mkdir(path.dirname(outputFilePath), { recursive: true });
      await writeFile(outputFilePath, output.contents);
    }
    console.log('done!');
    process.exit(0);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

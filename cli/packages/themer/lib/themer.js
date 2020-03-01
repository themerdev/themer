const path = require('path'),
  fs = require('fs'),
  { promisify } = require('util'),
  mkdir = promisify(fs.mkdir),
  writeFile = promisify(fs.writeFile),
  resolvePackage = require('./resolve'),
  getColors = require('./get-colors'),
  prepareColors = require('./prepare');

const flatten = arr => [].concat.apply([], arr);

module.exports = async function themer (colorsPackageName, templatePackageNames, outDirName, extraArgs) {
  console.log('resolving packages...');
  const resolvedPaths = await Promise.all([colorsPackageName, ...templatePackageNames].map(resolvePackage));
  const rawColors = await getColors(resolvedPaths[0]);
  const colors = prepareColors(rawColors);
  const templates = resolvedPaths.slice(1).map(require);
  const templateNames = templatePackageNames.map(templatePath => path.basename(templatePath));
  console.log('rendering templates...');
  const outputs = await Promise.all(
    flatten(
      templates.map(
        (template, i) => template.render(colors, extraArgs).map(
          promisedFile =>
            promisedFile
              .then(file => ({ file: file, dir: templateNames[i] }))
        )
      )
    )
  );
  console.log('writing files...');
  await Promise.all(
    outputs.map(
      async (output) => {
        const outputFilePath = path.resolve(outDirName, output.dir, output.file.name);
        await mkdir(path.dirname(outputFilePath), { recursive: true });
        await writeFile(outputFilePath, output.file.contents);
      }
    )
  )
}

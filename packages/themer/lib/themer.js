const fs = require('pn/fs'),
  mkdirp = require('mkdirp-promise'),
  path = require('path'),
  { Observable } = require('rxjs'),
  resolvePackage = require('./resolve'),
  getColors = require('./get-colors'),
  prepareColors = require('./prepare');

const flatten = arr => [].concat.apply([], arr);

module.exports = function themer(colorsPackageName, templatePackageNames, outDirName, extraArgs) {
  return Observable.create(async observer => {
    try {
      observer.next('resolving packages...');
      const resolvedPaths = await Promise.all([colorsPackageName, ...templatePackageNames].map(resolvePackage));
      const rawColors = await getColors(resolvedPaths[0], msg => observer.next(msg));
      const colors = prepareColors(rawColors, msg => observer.next(msg));
      const templates = resolvedPaths.slice(1).map(require);
      const templateNames = templatePackageNames.map(templatePath => path.basename(templatePath));
      observer.next('rendering templates...');
      const outputs = await Promise.all(
        flatten(
          templates.map(
            (template, i) => template.render(colors, extraArgs).map(
              promisedFile =>
                promisedFile
                  .then(file => ({ file: file, dir: templateNames[i] }))
                  .catch(err => Promise.reject(`${templateNames[i]}: ${err}`))
            )
          )
        )
      );
      observer.next('writing files...');
      await Promise.all(
        outputs.map(
          output => {
            const outputFilePath = path.resolve(outDirName, output.dir, output.file.name);
            return mkdirp(path.dirname(outputFilePath)).then(
              () => fs.writeFile(outputFilePath, output.file.contents)
            );
          }
        )
      );
      observer.complete();
    } catch(e) {
      observer.error(e);
    }
  });
};

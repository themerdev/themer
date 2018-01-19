const fs = require('pn/fs'),
  mkdirp = require('mkdirp-promise'),
  path = require('path'),
  Rx = require('rxjs/Rx'),
  resolvePackage = require('./resolve'),
  prepareColors = require('./prepare');

const flatten = arr => [].concat.apply([], arr);

module.exports = function themer(colorsPackageName, templatePackageNames, outDirName, extraArgs) {
  return Rx.Observable.create(async observer => {
    try {
      observer.next('resolving packages...');
      const requireables = await Promise.all([colorsPackageName, ...templatePackageNames].map(resolvePackage));
      const colors = prepareColors(require(requireables[0]).colors, msg => observer.next(msg));
      const templates = requireables.slice(1).map(require);
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

const path = require('path'),
  packageJson = require('./templates/packageJson'),
  indexLess = require('./templates/indexLess'),
  baseLess = require('./templates/baseLess'),
  buttonsLess = require('./templates/buttonsLess'),
  editorLess = require('./templates/editorLess'),
  findAndReplaceLess = require('./templates/findAndReplaceLess'),
  gitLess = require('./templates/gitLess'),
  keyBindingLess = require('./templates/keyBindingLess'),
  listsLess = require('./templates/listsLess'),
  panelsLess = require('./templates/panelsLess'),
  progressLess = require('./templates/progressLess'),
  sitesLess = require('./templates/sitesLess'),
  statusBarLess = require('./templates/statusBarLess'),
  tabsLess = require('./templates/tabsLess'),
  textLess = require('./templates/textLess'),
  tooltipsLess = require('./templates/tooltipsLess'),
  treeViewLess = require('./templates/treeViewLess'),
  uiVariablesLess = require('./templates/uiVariablesLess');

const flatten = arr => [].concat.apply([], arr);

const getDirectory = name => `themer-${name}-ui`;

const render = colors =>
  flatten(
    Object.keys(colors).map(name => [
      Promise.resolve({
        name: path.join(getDirectory(name), 'package.json'),
        contents: Buffer.from(packageJson(name), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'index.less'),
        contents: Buffer.from(indexLess(name), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'base.less'),
        contents: Buffer.from(baseLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'buttons.less'),
        contents: Buffer.from(buttonsLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'editor.less'),
        contents: Buffer.from(editorLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'find-and-replace.less'),
        contents: Buffer.from(findAndReplaceLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'git.less'),
        contents: Buffer.from(gitLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'key-binding.less'),
        contents: Buffer.from(keyBindingLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'lists.less'),
        contents: Buffer.from(listsLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'panels.less'),
        contents: Buffer.from(panelsLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'progress.less'),
        contents: Buffer.from(progressLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'sites.less'),
        contents: Buffer.from(sitesLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'status-bar.less'),
        contents: Buffer.from(statusBarLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'tabs.less'),
        contents: Buffer.from(tabsLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'text.less'),
        contents: Buffer.from(textLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'tooltips.less'),
        contents: Buffer.from(tooltipsLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'tree-view.less'),
        contents: Buffer.from(treeViewLess(), 'utf8'),
      }),
      Promise.resolve({
        name: path.join(getDirectory(name), 'styles', 'ui-variables.less'),
        contents: Buffer.from(uiVariablesLess(colors[name]), 'utf8'),
      }),
    ])
  );

const renderInstructions = paths => {
  const packages = new Set(
    paths.map(path.dirname).filter(p => !p.endsWith('styles')),
  );
  return `
Use the \`apm link\` command to install the generated theme ${packages.size > 1 ? 'packages' : 'package'} to Atom:

${[...packages].map(pkg => `    apm link '${pkg}'`).join('\n')}

Then open/reload Atom and select the desired theme in the list of available UI themes.
  `;
};

module.exports = {
  render,
  renderInstructions,
};

import path from 'path';
import packageJson from './templates/packageJson';
import indexLess from './templates/indexLess';
import baseLess from './templates/baseLess';
import buttonsLess from './templates/buttonsLess';
import editorLess from './templates/editorLess';
import findAndReplaceLess from './templates/findAndReplaceLess';
import gitLess from './templates/gitLess';
import keyBindingLess from './templates/keyBindingLess';
import listsLess from './templates/listsLess';
import panelsLess from './templates/panelsLess';
import progressLess from './templates/progressLess';
import sitesLess from './templates/sitesLess';
import statusBarLess from './templates/statusBarLess';
import tabsLess from './templates/tabsLess';
import textLess from './templates/textLess';
import tooltipsLess from './templates/tooltipsLess';
import treeViewLess from './templates/treeViewLess';
import uiVariablesLess from './templates/uiVariablesLess';

const flatten = arr => [].concat.apply([], arr);

const getDirectory = name => `themer-${name}-ui`;

export const render = colors =>
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

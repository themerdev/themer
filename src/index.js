import { execFile } from 'pn/child_process';
import fs from 'pn/fs';
import os from 'os';
import path from 'path';
import sfs from 'fs';

const mkdtemp = prefix => new Promise((resolve, reject) => {
  sfs.mkdtemp(prefix, (err, folder) => {
    if (err) { reject(err); }
    else { resolve(folder); }
  });
});

export const render = (colors) => {
  const colorSets = Object.entries(colors).map(([theme, colors]) => ({ theme: theme, colors: colors }));
  return colorSets.map(colorSet => {
    return mkdtemp(`${os.tmpdir()}${path.sep}themer-`)
      .then(folder => {
        const fileName = `themer-${colorSet.theme}.terminal`;
        const tmpFilePath = path.resolve(folder, fileName);
        return execFile(path.resolve(__dirname, 'gen.swift'), [
          colorSet.colors.accent0,
          colorSet.colors.accent1,
          colorSet.colors.accent2,
          colorSet.colors.accent3,
          colorSet.colors.accent4,
          colorSet.colors.accent5,
          colorSet.colors.accent6,
          colorSet.colors.accent7,
          colorSet.colors.shade0,
          colorSet.colors.shade1,
          colorSet.colors.shade2,
          colorSet.colors.shade3,
          colorSet.colors.shade4,
          colorSet.colors.shade5,
          colorSet.colors.shade6,
          colorSet.colors.shade7,
          `themer-terminal-${colorSet.theme}`,
          tmpFilePath,
        ]).promise
          .then(() => fs.readFile(tmpFilePath))
          .then(contents => ({
            name: fileName,
            contents: contents,
          }));
      });
  });
};

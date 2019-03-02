import prepareColors from 'themer/lib/prepare';
import JSZip from 'jszip';

import { render as renderAlfred } from 'themer-alfred';
import { render as renderAtomSyntax } from 'themer-atom-syntax';
import { render as renderAtomUi } from 'themer-atom-ui';
import { render as renderBbedit } from 'themer-bbedit';
import { render as renderChrome } from 'themer-chrome';
import { render as renderCmd } from 'themer-cmd';
import { render as renderConemu } from 'themer-conemu';
import { render as renderGnomeTerminal } from 'themer-gnome-terminal';
import { render as renderHyper } from 'themer-hyper';
import { render as renderIterm } from 'themer-iterm';
import { render as renderJetbrains } from 'themer-jetbrains';
import { render as renderKitty } from 'themer-kitty';
import { render as renderSketchPalettes } from 'themer-sketch-palettes';
import { render as renderSlack } from 'themer-slack';
import { render as renderSublimeText } from 'themer-sublime-text';
import { render as renderTermite } from 'themer-termite';
import { render as renderTmux } from 'themer-tmux';
import { render as renderVim } from 'themer-vim';
import { render as renderVimLightline } from 'themer-vim-lightline';
import { render as renderVscode } from 'themer-vscode';
import { render as renderWallpaperBlockWave } from 'themer-wallpaper-block-wave';
import { render as renderWallpaperOctagon } from 'themer-wallpaper-octagon';
import { render as renderWallpaperShirts } from 'themer-wallpaper-shirts';
import { render as renderWallpaperTriangles } from 'themer-wallpaper-triangles';
import { render as renderWallpaperTrianglify } from 'themer-wallpaper-trianglify';
import { render as renderXcode } from 'themer-xcode';

const templates = {
  alfred: { folderName: 'Alfred', render: renderAlfred },
  atomSyntax: { folderName: 'Atom Syntax', render: renderAtomSyntax },
  atomUi: { folderName: 'Atom UI', render: renderAtomUi },
  bbedit: { folderName: 'BBEdit', render: renderBbedit },
  chrome: { folderName: 'Chrome', render: renderChrome },
  cmd: { folderName: 'CMD', render: renderCmd },
  conemu: { folderName: 'ConEmu', render: renderConemu },
  gnomeTerminal: { folderName: 'GNOME Terminal', render: renderGnomeTerminal },
  hyper: { folderName: 'Hyper', render: renderHyper },
  iterm: { folderName: 'iTerm', render: renderIterm },
  jetbrains: { folderName: 'JetBrains', render: renderJetbrains },
  kitty: { folderName: 'kitty', render: renderKitty },
  sketchPalettes: { folderName: 'Sketch', render: renderSketchPalettes },
  slack: { folderName: 'Slack sidebar', render: renderSlack },
  sublimeText: { folderName: 'Sublime Text', render: renderSublimeText },
  termite: { folderName: 'Termite', render: renderTermite },
  tmux: { folderName: 'tmux', render: renderTmux },
  vim: { folderName: 'Vim', render: renderVim },
  vimLightline: { folderName: 'Vim lightline', render: renderVimLightline },
  vscode: { folderName: 'VS Code', render: renderVscode },
  wallpaperBlockWave: { folderName: 'Block Wave', render: renderWallpaperBlockWave },
  wallpaperOctagon: { folderName: 'Octagon', render: renderWallpaperOctagon },
  wallpaperShirts: { folderName: 'Shirts', render: renderWallpaperShirts },
  wallpaperTriangles: { folderName: 'Triangles', render: renderWallpaperTriangles },
  wallpaperTrianglify: { folderName: 'Trianglify', render: renderWallpaperTrianglify },
  xcode: { folderName: 'Xcode', render: renderXcode },
};

const resolutionOptions = {
  wallpaperBlockWave: 'themer-wallpaper-block-wave-size',
  wallpaperOctagon: 'themer-wallpaper-octagon-size',
  wallpaperShirts: 'themer-wallpaper-shirts-size',
  wallpaperTriangles: 'themer-wallpaper-triangles-size',
  wallpaperTrianglify: 'themer-wallpaper-trianglify-size',
}

const installationLocations = {
  alfred: { name: 'Alfred.app', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-alfred#output' },
  atomSyntax: { name: 'Atom syntax', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-atom-syntax#output' },
  atomUi: { name: 'Atom UI', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-atom-ui#output' },
  bbedit: { name: 'BBEdit', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-bbedit#output' },
  chrome: { name: 'Chrome', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-chrome#output' },
  cmd: { name: 'CMD.exe', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-cmd#output' },
  conemu: { name: 'ConEmu', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-conemu#output' },
  gnomeTerminal: { name: 'GNOME Terminal', instructionsUrl: 'https://github.com/agarrharr/themer-gnome-terminal#installation--usage' },
  hyper: { name: 'Hyper', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-hyper#output' },
  iterm: { name: 'iTerm', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-iterm#output' },
  jetbrains: { name: 'JetBrains', instructionsUrl: 'https://github.com/tomselvi/themer-jetbrains#output' },
  kitty: { name: 'kitty', instructionsUrl: 'https://github.com/0x52a1/themer-kitty#output' },
  sketchPalettes: { name: 'Sketch palettes', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-sketch-palettes#output' },
  slack: { name: 'Slack sidebar', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-slack#output' },
  sublimeText: { name: 'Sublime Text', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-sublime-text#output' },
  termite: { name: 'Termite', instructionsUrl: 'https://github.com/0x52a1/themer-termite#installation-and-usage' },
  tmux: { name: 'tmux', instructionsUrl: 'https://github.com/tomselvi/themer-tmux#output' },
  vim: { name: 'Vim', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-vim#output' },
  vimLightline: { name: 'Vim lightline', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-vim-lightline#output' },
  vscode: { name: 'VS Code', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-vscode#output' },
  xcode: { name: 'Xcode', instructionsUrl: 'https://github.com/mjswensen/themer/tree/master/cli/packages/themer-xcode#output' },
}

const instructions = (selections, url) => `# Installation

Information on how to install your themer themes can be found in the following locations:

${
  Object.entries(selections)
    .filter(([_, selected]) => selected)
    .sort((a, b) => a[0] < b[0] ? -1 : 1)
    .map(([key]) => installationLocations[key])
    .filter(Boolean)
    .map(({name, instructionsUrl}) => `* [${name}](${instructionsUrl})`)
    .join('\n')
}

# Your theme's URL

${url}
`;

export default async function generateZip(selections, colors, width, height, url) {
  const zip = new JSZip();
  const preparedColors = prepareColors(colors, () => {});
  zip.file('Instructions.md', instructions(selections, url));
  for (const [key, selected] of Object.entries(selections)) {
    if (selected) {
      const files = await Promise.all(templates[key].render(
        preparedColors,
        key in resolutionOptions
          ? { [resolutionOptions[key]]: `${width}x${height}` }
          : {},
      ));
      files.forEach(file => {
        zip.folder(templates[key].folderName).file(file.name, file.contents);
      });
    }
  }
  return zip;
}

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

export default async function generateZip(selections, colors, width, height) {
  const zip = new JSZip();
  const preparedColors = prepareColors(colors, () => {});
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

import prepareColors from 'themer/lib/prepare';
import themer from 'themer/lib/themer';
import JSZip from 'jszip';
import { flatten, sortBy } from 'lodash';

import * as themerAlacritty from '@themerdev/alacritty';
import * as themerAlfred from '@themerdev/alfred';
import * as themerAtomSyntax from '@themerdev/atom-syntax';
import * as themerAtomUi from '@themerdev/atom-ui';
import * as themerBbedit from '@themerdev/bbedit';
import * as themerBrave from '@themerdev/brave';
import * as themerChrome from '@themerdev/chrome';
import * as themerCmd from '@themerdev/cmd';
import * as themerConemu from '@themerdev/conemu';
import * as themerCss from '@themerdev/css';
import * as themerEmacs from '@themerdev/emacs';
import * as themerFirefoxAddon from '@themerdev/firefox-addon';
import * as themerFirefoxColor from '@themerdev/firefox-color';
import * as themerGnomeTerminal from 'themer-gnome-terminal';
import * as themerHyper from '@themerdev/hyper';
import * as themerIterm from '@themerdev/iterm';
import * as themerJetbrains from 'themer-jetbrains';
import * as themerKdePlasmaColors from '@themerdev/kde-plasma-colors';
import * as themerKeypirinha from '@themerdev/keypirinha';
import * as themerKitty from '@themerdev/kitty';
import * as themerKonsole from '@themerdev/konsole';
import * as themerPrism from '@themerdev/prism';
import * as themerSketchPalettes from '@themerdev/sketch-palettes';
import * as themerSlack from '@themerdev/slack';
import * as themerSublimeText from '@themerdev/sublime-text';
import * as themerTerminal from '@themerdev/terminal';
import * as themerTerminator from '@themerdev/terminator';
import * as themerTermite from 'themer-termite';
import * as themerTmux from 'themer-tmux';
import * as themerVim from '@themerdev/vim';
import * as themerVimLightline from '@themerdev/vim-lightline';
import * as themerVisualStudio from '@themerdev/visual-studio';
import * as themerVscode from '@themerdev/vscode';
import * as themerWallpaperBlockWave from '@themerdev/wallpaper-block-wave';
import * as themerWallpaperBurst from '@themerdev/wallpaper-burst';
import * as themerWallpaperCircuits from '@themerdev/wallpaper-circuits';
import * as themerWallpaperDiamonds from '@themerdev/wallpaper-diamonds';
import * as themerWallpaperDotGrid from '@themerdev/wallpaper-dot-grid';
import * as themerWallpaperOctagon from '@themerdev/wallpaper-octagon';
import * as themerWallpaperShirts from '@themerdev/wallpaper-shirts';
import * as themerWallpaperTriangles from '@themerdev/wallpaper-triangles';
import * as themerWallpaperTrianglify from '@themerdev/wallpaper-trianglify';
import * as themerWarp from '@themerdev/warp';
import * as themerWindowsTerminal from '@themerdev/windows-terminal';
import * as themerWox from '@themerdev/wox';
import * as themerXcode from '@themerdev/xcode';
import * as themerXresources from '@themerdev/xresources';

const templates = {
  alacritty: { name: 'Alacritty', ...themerAlacritty },
  alfred: { name: 'Alfred', ...themerAlfred },
  atomSyntax: { name: 'Atom Syntax', ...themerAtomSyntax },
  atomUi: { name: 'Atom UI', ...themerAtomUi },
  bbedit: { name: 'BBEdit', ...themerBbedit },
  brave: { name: 'Brave', ...themerBrave },
  chrome: { name: 'Chrome', ...themerChrome },
  cmd: { name: 'CMD', ...themerCmd },
  conemu: { name: 'ConEmu', ...themerConemu },
  css: { name: 'CSS', ...themerCss },
  emacs: { name: 'Emacs', ...themerEmacs },
  firefox: [
    { name: 'Firefox Add-on', ...themerFirefoxAddon },
    { name: 'Firefox Color', ...themerFirefoxColor },
  ],
  gnomeTerminal: { name: 'GNOME Terminal', ...themerGnomeTerminal },
  hyper: { name: 'Hyper', ...themerHyper },
  iterm: { name: 'iTerm', ...themerIterm },
  jetbrains: { name: 'JetBrains', ...themerJetbrains },
  kdePlasmaColors: { name: 'KDE Plasma Colors', ...themerKdePlasmaColors },
  keypirinha: { name: 'Keypirinha', ...themerKeypirinha },
  kitty: { name: 'kitty', ...themerKitty },
  konsole: { name: 'Konsole', ...themerKonsole },
  prism: { name: 'prism', ...themerPrism },
  sketchPalettes: { name: 'Sketch', ...themerSketchPalettes },
  slack: { name: 'Slack sidebar', ...themerSlack },
  sublimeText: { name: 'Sublime Text', ...themerSublimeText },
  terminal: { name: 'Terminal', ...themerTerminal },
  terminator: { name: 'Terminator', ...themerTerminator },
  termite: { name: 'Termite', ...themerTermite },
  tmux: { name: 'tmux', ...themerTmux },
  vim: { name: 'Vim', ...themerVim },
  vimLightline: { name: 'Vim lightline', ...themerVimLightline },
  visualStudio: { name: 'Visual Studio', ...themerVisualStudio },
  vscode: { name: 'VS Code', ...themerVscode },
  wallpaperBlockWave: {
    name: 'Block Wave Wallpaper',
    ...themerWallpaperBlockWave,
  },
  wallpaperBurst: { name: 'Burst Wallpaper', ...themerWallpaperBurst },
  wallpaperCircuits: { name: 'Circuits Wallpaper', ...themerWallpaperCircuits },
  wallpaperDiamonds: { name: 'Diamonds Wallpaper', ...themerWallpaperDiamonds },
  wallpaperDotGrid: { name: 'Dot Grid Wallpaper', ...themerWallpaperDotGrid },
  wallpaperOctagon: { name: 'Octagon Wallpaper', ...themerWallpaperOctagon },
  wallpaperShirts: { name: 'Shirts Wallpaper', ...themerWallpaperShirts },
  wallpaperTriangles: {
    name: 'Triangles Wallpaper',
    ...themerWallpaperTriangles,
  },
  wallpaperTrianglify: {
    name: 'Trianglify Wallpaper',
    ...themerWallpaperTrianglify,
  },
  warp: {
    name: 'Warp',
    ...themerWarp,
  },
  windowsTerminal: { name: 'Windows Terminal', ...themerWindowsTerminal },
  wox: { name: 'Wox', ...themerWox },
  xcode: { name: 'Xcode', ...themerXcode },
  xresources: { name: 'Xresources', ...themerXresources },
};

const resolutionOptions = {
  wallpaperBlockWave: 'themer-wallpaper-block-wave-size',
  wallpaperBurst: 'themer-wallpaper-burst-size',
  wallpaperCircuits: 'themer-wallpaper-circuits-size',
  wallpaperDiamonds: 'themer-wallpaper-diamonds-size',
  wallpaperDotGrid: 'themer-wallpaper-dot-grid-size',
  wallpaperOctagon: 'themer-wallpaper-octagon-size',
  wallpaperShirts: 'themer-wallpaper-shirts-size',
  wallpaperTriangles: 'themer-wallpaper-triangles-size',
  wallpaperTrianglify: 'themer-wallpaper-trianglify-size',
};

const instructions = (url) => `# \`themer\`

Your theme's unique URL:

${url}

If you find \`themer\` useful, here are some ways to support the project:

- Star [\`themer\` on GitHub](https://github.com/themerdev/themer)
- Follow [@themer](https://fosstodon.org/@themer) on Mastodon
- [Send a tip through the Brave Browser](https://brave.com/the537), either on [the repository page](https://github.com/themerdev/themer) or [the Web UI](https://themer.dev)
- Pay what you want when downloading your theme from [themer.dev](https://themer.dev)
- [Sponsor the @themerdev GitHub org](https://github.com/sponsors/themerdev)

# Installation instructions`;

const proInstructions = (proTheme) => `# \`themer\`

Thank you for purchasing [${proTheme.title}](${
  window.location.origin + '/' + proTheme.slug
})!

If you need to re-download your theme files or otherwise need help with your order, please send an email to [themer@themer.dev](mailto:themer@themer.dev).

# Installation instructions`;

const colorsForCli = (
  cliColors,
  url,
) => `// This file can be used with the themer CLI, see https://github.com/themerdev/themer

module.exports.colors = ${JSON.stringify(cliColors, null, 2)};

// Your theme's URL: ${url}
`;

export default async function generateZip(
  selections,
  colors,
  width,
  height,
  url,
  cliColors,
  proTheme,
) {
  const zip = new JSZip();
  const preparedColors = prepareColors(colors);
  const selectedKeys = Array.from(Object.entries(selections))
    .filter(([_, selected]) => selected)
    .map(([key]) => key);
  const selectedTemplates = sortBy(
    flatten(
      selectedKeys.map((key) =>
        Array.isArray(templates[key]) ? templates[key] : [templates[key]],
      ),
    ),
    (template) => template.name.toLowerCase(),
  );
  const extraArgs = selectedKeys.reduce(
    (acc, key) => ({
      ...acc,
      [resolutionOptions[key]]: `${width}x${height}`,
    }),
    {},
  );
  const files = await themer(
    preparedColors,
    selectedTemplates,
    extraArgs,
    '/',
    proTheme && proTheme.price.type === 'fixed'
      ? proInstructions(proTheme)
      : instructions(url),
  );
  for (const file of files) {
    zip.file(file.name, file.contents);
  }
  zip.file('colors.js', colorsForCli(cliColors, url));
  return zip;
}

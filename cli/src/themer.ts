import type { BuiltInColorSet, ColorSet } from './color-set/index.js';
import { prepareColorSet, resolveColorSet } from './color-set/index.js';
import type {
  BuiltInTemplate,
  Template,
  OutputFile,
  RenderOptions,
} from './template/index.js';

import alacritty from './template/alacritty.js';
import alfred from './template/alfred.js';
import bbEdit from './template/bbedit.js';
import brave from './template/brave.js';
import chrome from './template/chrome.js';
import cmd from './template/cmd.js';
import conemu from './template/conemu.js';
import css from './template/css.js';
import emacs from './template/emacs.js';
import firefoxAddon from './template/firefox-addon.js';
import hyper from './template/hyper.js';
import iterm from './template/iterm.js';
import kdePlasmaColors from './template/kde-plasma-colors.js';
import keypirinha from './template/keypirinha.js';
import kitty from './template/kitty.js';
import konsole from './template/konsole.js';
import prism from './template/prism.js';
import sketchPalettes from './template/sketch-palettes.js';
import slack from './template/slack.js';
import sublimeText from './template/sublime-text.js';
import terminal from './template/terminal.js';
import terminator from './template/terminator.js';
import vimLightline from './template/vim-lightline.js';
import vim from './template/vim.js';
import visualStudio from './template/visual-studio.js';
import vsCode from './template/vs-code.js';
import wallpaperBlockWave from './template/wallpaper-block-wave.js';
import wallpaperBurst from './template/wallpaper-burst.js';
import wallpaperCircuits from './template/wallpaper-circuits.js';
import wallpaperDiamonds from './template/wallpaper-diamonds.js';
import wallpaperDotGrid from './template/wallpaper-dot-grid.js';
import wallpaperOctagon from './template/wallpaper-octagon.js';
import wallpaperShirts from './template/wallpaper-shirts.js';
import wallpaperTriangles from './template/wallpaper-triangles.js';
import warp from './template/warp.js';
import windowsTerminal from './template/windows-terminal.js';
import wox from './template/wox.js';
import xcode from './template/xcode.js';
import xresources from './template/xresources.js';

function resolveTemplate(template: BuiltInTemplate | Template): Template {
  switch (template) {
    case 'alacritty':
      return alacritty;
    case 'alfred':
      return alfred;
    case 'bbedit':
      return bbEdit;
    case 'brave':
      return brave;
    case 'chrome':
      return chrome;
    case 'cmd':
      return cmd;
    case 'conemu':
      return conemu;
    case 'css':
      return css;
    case 'emacs':
      return emacs;
    case 'firefox-addon':
      return firefoxAddon;
    case 'hyper':
      return hyper;
    case 'iterm':
      return iterm;
    case 'kde-plasma-colors':
      return kdePlasmaColors;
    case 'keypirinha':
      return keypirinha;
    case 'kitty':
      return kitty;
    case 'konsole':
      return konsole;
    case 'prism':
      return prism;
    case 'sketch-palettes':
      return sketchPalettes;
    case 'slack':
      return slack;
    case 'sublime-text':
      return sublimeText;
    case 'terminal':
      return terminal;
    case 'terminator':
      return terminator;
    case 'vim':
      return vim;
    case 'vim-lightline':
      return vimLightline;
    case 'visual-studio':
      return visualStudio;
    case 'vs-code':
      return vsCode;
    case 'wallpaper-block-wave':
      return wallpaperBlockWave;
    case 'wallpaper-burst':
      return wallpaperBurst;
    case 'wallpaper-circuits':
      return wallpaperCircuits;
    case 'wallpaper-diamonds':
      return wallpaperDiamonds;
    case 'wallpaper-dot-grid':
      return wallpaperDotGrid;
    case 'wallpaper-octagon':
      return wallpaperOctagon;
    case 'wallpaper-shirts':
      return wallpaperShirts;
    case 'wallpaper-triangles':
      return wallpaperTriangles;
    case 'warp':
      return warp;
    case 'windows-terminal':
      return windowsTerminal;
    case 'wox':
      return wox;
    case 'xcode':
      return xcode;
    case 'xresources':
      return xresources;
    default:
      return template;
  }
}

export async function* themer(
  colorSets: (BuiltInColorSet | ColorSet)[],
  templates: (BuiltInTemplate | Template)[],
  options: RenderOptions,
): AsyncGenerator<OutputFile> {
  for (const colorSet of colorSets) {
    const resolvedColorSet = resolveColorSet(colorSet);
    const fullColorSet = prepareColorSet(resolvedColorSet);
    const resolvedTemplates = templates.map(resolveTemplate);
    const instructions: string[] = [`# themer - ${fullColorSet.name}`];
    const rootDir = fullColorSet.name;
    for (const template of resolvedTemplates) {
      const templatePaths: string[] = [];
      for await (const file of template.render(fullColorSet, options)) {
        const path = `${template.name}/${file.path}`;
        yield {
          ...file,
          path: `${rootDir}/${path}`,
        };
        templatePaths.push(path);
      }
      instructions.push(`## ${template.name}`);
      instructions.push(
        template.renderInstructions(templatePaths, fullColorSet).trim(),
      );
    }
    yield {
      path: `${rootDir}/README.md`,
      content: instructions.join('\n\n'),
    };
  }
}

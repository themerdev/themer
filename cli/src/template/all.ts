import alacritty from './alacritty.js';
import alfred from './alfred.js';
import bbEdit from './bbedit.js';
import brave from './brave.js';
import chrome from './chrome.js';
import cmd from './cmd.js';
import conemu from './conemu.js';
import css from './css.js';
import emacs from './emacs.js';
import firefoxAddon from './firefox-addon.js';
import hyper from './hyper.js';
import type { Template } from './index.js';
import iterm from './iterm.js';
import kdePlasmaColors from './kde-plasma-colors.js';
import keypirinha from './keypirinha.js';
import kitty from './kitty.js';
import konsole from './konsole.js';
import prism from './prism.js';
import sketchPalettes from './sketch-palettes.js';
import slack from './slack.js';
import sublimeText from './sublime-text.js';
import terminal from './terminal.js';
import terminator from './terminator.js';
import tmux from './tmux.js';
import vimLightline from './vim-lightline.js';
import vim from './vim.js';
import visualStudio from './visual-studio.js';
import vsCode from './vs-code.js';
import wallpaperBlockWave from './wallpaper-block-wave.js';
import wallpaperBurst from './wallpaper-burst.js';
import wallpaperCircuits from './wallpaper-circuits.js';
import wallpaperDiamonds from './wallpaper-diamonds.js';
import wallpaperDotGrid from './wallpaper-dot-grid.js';
import wallpaperOctagon from './wallpaper-octagon.js';
import wallpaperShirts from './wallpaper-shirts.js';
import wallpaperTriangles from './wallpaper-triangles.js';
import warp from './warp.js';
import windowsTerminal from './windows-terminal.js';
import wox from './wox.js';
import xcode from './xcode.js';
import xresources from './xresources.js';

const BUILT_IN_TEMPLATE_IDENTIFIERS = [
  'alacritty',
  'alfred',
  'bbedit',
  'brave',
  'chrome',
  'cmd',
  'conemu',
  'css',
  'emacs',
  'firefox-addon',
  'hyper',
  'iterm',
  'kde-plasma-colors',
  'keypirinha',
  'kitty',
  'konsole',
  'prism',
  'sketch-palettes',
  'slack',
  'sublime-text',
  'terminal',
  'terminator',
  'tmux',
  'vim',
  'vim-lightline',
  'visual-studio',
  'vs-code',
  'wallpaper-block-wave',
  'wallpaper-burst',
  'wallpaper-circuits',
  'wallpaper-diamonds',
  'wallpaper-dot-grid',
  'wallpaper-octagon',
  'wallpaper-shirts',
  'wallpaper-triangles',
  'warp',
  'windows-terminal',
  'wox',
  'xcode',
  'xresources',
] as const;

export type BuiltInTemplate = (typeof BUILT_IN_TEMPLATE_IDENTIFIERS)[number];
export const allBuiltInTemplateIdentifiers: BuiltInTemplate[] = [
  ...BUILT_IN_TEMPLATE_IDENTIFIERS,
];

export function resolveTemplate(
  template: BuiltInTemplate | Template,
): Template {
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
    case 'tmux':
      return tmux;
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

export const allBuiltInTemplates: Map<BuiltInTemplate, Template> = new Map(
  allBuiltInTemplateIdentifiers.map((id) => [id, resolveTemplate(id)]),
);

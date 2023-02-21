import { join } from 'node:path';
import type { BuiltInColorSet, ColorSet } from './color-set/index.js';
import { prepareColorSet } from './color-set/index.js';
import type {
  BuiltInTemplate,
  Template,
  OutputFile,
  RenderOptions,
} from './template/index.js';

import defaultColorSet from './color-set/default.js';
import dracula from './color-set/dracula.js';
import fingerPaint from './color-set/finger-paint.js';
import githubUniverse from './color-set/github-universe.js';
import greenAsAWhistle from './color-set/green-as-a-whistle.js';
import lucid from './color-set/lucid.js';
import mojave from './color-set/mojave.js';
import monkey from './color-set/monkey.js';
import nightSky from './color-set/night-sky.js';
import nova from './color-set/nova.js';
import one from './color-set/one.js';
import polarIce from './color-set/polar-ice.js';
import rightInTheTeals from './color-set/right-in-the-teals.js';
import rivet from './color-set/rivet.js';
import seti from './color-set/seti.js';
import solarized from './color-set/solarized.js';

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
import firefoxColor from './template/firefox-color.js';
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
import wallpaperTrianglify from './template/wallpaper-trianglify.js';
import warp from './template/warp.js';
import windowsTerminal from './template/windows-terminal.js';
import wox from './template/wox.js';
import xcode from './template/xcode.js';
import xresources from './template/xresources.js';
import { filePathsToTree, treeToString } from 'file-paths-to-tree';

function resolveColorSet(colorSet: BuiltInColorSet | ColorSet): ColorSet {
  switch (colorSet) {
    case 'default':
      return defaultColorSet;
    case 'dracula':
      return dracula;
    case 'finger-paint':
      return fingerPaint;
    case 'github-universe':
      return githubUniverse;
    case 'green-as-a-whistle':
      return greenAsAWhistle;
    case 'lucid':
      return lucid;
    case 'mojave':
      return mojave;
    case 'monkey':
      return monkey;
    case 'night-sky':
      return nightSky;
    case 'nova':
      return nova;
    case 'one':
      return one;
    case 'polar-ice':
      return polarIce;
    case 'right-in-the-teals':
      return rightInTheTeals;
    case 'rivet':
      return rivet;
    case 'seti':
      return seti;
    case 'solarized':
      return solarized;
    default:
      return colorSet;
  }
}

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
    case 'firefox-color':
      return firefoxColor;
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
    case 'wallpaper-trianglify':
      return wallpaperTrianglify;
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
    const allPaths: string[] = [];
    const instructions: string[] = [`# themer - ${fullColorSet.name}`];
    const rootDir = fullColorSet.name;
    for (const template of resolvedTemplates) {
      const templatePaths: string[] = [];
      for await (const file of template.render(fullColorSet, options)) {
        const path = join(template.name, file.path);
        yield {
          ...file,
          path: join(rootDir, path),
        };
        templatePaths.push(path);
      }
      instructions.push(`## ${template.name}`);
      instructions.push(
        template.renderInstructions(templatePaths, fullColorSet).trim(),
      );
      allPaths.push(...templatePaths);
    }
    instructions.push('# Files rendered');
    instructions.push(treeToString(filePathsToTree(allPaths)));
    yield {
      path: join(rootDir, 'README.md'),
      content: Buffer.from(instructions.join('\n\n')),
    };
  }
}

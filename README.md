<p align="center">
  <a href="https://themer.dev">
    <img src="https://cdn.jsdelivr.net/gh/mjswensen/themer@4e78b9a50a00bab7605b4996e428b9a6c4a000b0/assets/icon.png" width="384" alt="Themer logo" />
  </a>
</p>

# themer ![CI](https://github.com/mjswensen/themer/workflows/CI/badge.svg?branch=master) [![npm](https://img.shields.io/npm/dt/themer.svg)](https://github.com/mjswensen/themer#installation) ![Twitter Follow](https://img.shields.io/twitter/follow/themerdev?style=social)

`themer` takes a set of colors and generates [editor themes](#editorsides), [terminal themes](#terminals), [themes for other apps](#other), and [desktop/device wallpapers](#wallpapers).

![visual description](https://cdn.jsdelivr.net/gh/mjswensen/themer@a186c8585721d5defbf4cb1bc94165144d4dd35a/assets/themer-description.png)

## Table of Contents

* [Support `themer`](#support-themer)
* [Installation](#installation)
* [Usage](#usage)
  * [Example workflow](#example-workflow)
  * [Example usage with `npx`](#example-usage-with-npx)
* [Themer color sets](#themer-color-sets)
  * [Original color sets](#original-color-sets)
  * [Ports from third-party themes](#ports-from-third-party-themes)
  * [Create your own color set](#create-your-own-color-set)
    * [Color mappings](#color-mappings)
    * [Tips](#tips)
  * [Using base16 schemes with Themer](#using-base16-schemes-with-themer)
* [Themer templates](#themer-templates)
  * [Terminals](#terminals)
  * [Editors/IDEs](#editorsides)
  * [Wallpapers](#wallpapers)
  * [Other](#other)
  * [Create your own template](#create-your-own-template)
* [About](#about)
* [Themer's Web UI](#themers-web-ui)

## Support `themer`

* ⭐️ Star [`themer` on GitHub](https://github.com/mjswensen/themer)
* 👋 Follow [@themerdev](https://twitter.com/themerdev) on Twitter
* 🦁 [Send a tip through the Brave Browser](https://brave.com/mjs684), either on [the repository page](https://github.com/mjswensen/themer) or [`themer`'s Web UI](https://themer.dev)

## Installation

_Don't love the command-line? Check out [the Web UI](https://themer.dev)._

```sh
mkdir my-dotfiles && cd my-dotfiles
npm install themer
```

If you do not keep your dotfiles under version control, you can simply install themer globally with `npm -g install themer`.

`themer` can also be used without installing, via `npx`—see [example below](#example-usage-with-npx).

## Usage

Pass `themer` a color set, as many templates as you wish, and an output directory.

```sh
themer \
  --colors <npm package name OR file> \
  --template <npm package name OR file> \
  [--template <npm package name OR file>...] \
  --out <directory>
```

Your generated theme files, as well as a README on how to install them, will be written to the output directory.

`themer` can create themes from your custom color sets (see ["Create your own color set"](#create-your-own-color-set) below) or from color sets published on npm (see [@themer/colors-default](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-default)). The same is true for templates.

### Example workflow

Say you wanted to generate a vim theme and desktop background using `themer`'s default color set. First, install `themer`, the color set, and the templates:

```sh
cd my-dotfiles
npm install themer @themer/colors-default themer-vim themer-wallpaper-block-wave
```

Then edit your `package.json`:

```json
  ...
  "scripts": {
    "build": "themer -c @themer/colors-default -t themer-vim -t themer-wallpaper-block-wave -o gen"
  },
  ...
```

Then run your new script:

```sh
npm run build
```

Now check the `gen/` folder for your generated themes. Here's the result:

![example usage result](https://cdn.jsdelivr.net/gh/mjswensen/themer@a186c8585721d5defbf4cb1bc94165144d4dd35a/assets/example-usage.png)

### Example usage with `npx`

```sh
npx \
  -p themer \
  -p @themer/colors-default \
  -p themer-vim \
  -p themer-wallpaper-block-wave \
  themer \
  -c @themer/colors-default \
  -t themer-vim \
  -t themer-wallpaper-block-wave \
  -o output
```

## Themer color sets

### Original color sets

| Name | Dark Preview | Light Preview |
| --- | --- | --- |
| [@themer/colors-default](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-default) | ![@themer/colors-default dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-default-dark-swatch.svg) | ![@themer/colors-default light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-default-light-swatch.svg) |
| [@themer/colors-night-sky](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-night-sky) | ![@themer/colors-night-sky dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-night-sky-dark-swatch.svg) | (dark only) |
| [@themer/colors-polar-ice](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-polar-ice) | ![@themer/colors-polar-ice dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-polar-ice-dark-swatch.svg) | ![@themer/colors-polar-ice light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-polar-ice-light-swatch.svg) |
| [@themer/colors-finger-paint](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-finger-paint) | ![@themer/colors-finger-paint dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-finger-paint-dark-swatch.svg) | ![@themer/colors-finger-paint light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-finger-paint-light-swatch.svg) |
| [@themer/colors-monkey](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-monkey) | ![@themer/colors-monkey dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-monkey-dark-swatch.svg) | ![@themer/colors-monkey light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-monkey-light-swatch.svg) |
| [@themer/colors-right-in-the-teals](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-right-in-the-teals) | ![@themer/colors-right-in-the-teals dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-right-in-the-teals-dark-swatch.svg) | ![@themer/colors-right-in-the-teals light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-right-in-the-teals-light-swatch.svg) |

### Ports from third-party themes

| Name | Dark Preview | Light Preview |
| --- | --- | --- |
| [@themer/colors-one](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-one) | ![@themer/colors-one dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-one-dark-swatch.svg) | ![@themer/colors-one light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-one-light-swatch.svg) |
| [@themer/colors-lucid](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-lucid) | ![@themer/colors-lucid dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-lucid-dark-swatch.svg) | ![@themer/colors-lucid light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-lucid-light-swatch.svg) |
| [@themer/colors-solarized](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-solarized) | ![@themer/colors-solarized dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-solarized-dark-swatch.svg) | ![@themer/colors-solarized light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-solarized-light-swatch.svg) |
| [@themer/colors-github-universe](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-github-universe) | ![!themer/colors-github-universe preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-github-universe-dark-swatch.svg) | (dark only) |
| [@themer/colors-nova](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-nova) | ![@themer/colors-nova preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-nova-dark-swatch.svg) | (dark only) |
| [@themer/colors-mojave](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-mojave) | ![@themer/colors-mojave dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-mojave-dark-swatch.svg) | ![@themer/colors-mojave light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-mojave-light-swatch.svg) |
| [@themer/colors-rivet](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-rivet) | ![@themer/colors-rivet dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-rivet-dark-swatch.svg) | ![@themer/colors-rivet light preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-rivet-light-swatch.svg) |
| [@themer/colors-dracula](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-dracula) | ![@themer/colors-dracula dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@0a1c71ce1fd01ec56daca72be8b04db6d81b16b5/assets/preview/themer-colors-dracula-dark-swatch.svg) | (dark only) |
| [@themer/colors-seti](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-seti) | ![@themer/colors-seti dark preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@a0deeb0588fd67dec53ad506b302df9e493ad837/assets/preview/themer-colors-seti-dark-swatch.svg) | (dark only) |

### Create your own color set

To create your own color set, create a JavaScript file that exports a `colors` object, like so:

```js
module.exports.colors = {

  // A color set can have both light and dark variants, but is only required
  // to have one.
  dark: {

    // Colors can be defined in any valid CSS format.

    // accent0-7 should be the main accent colors of your theme. See the table
    // in the "Color mappings" section for how the colors will be used in your
    // new themes.
    accent0: '#FF4050',
    accent1: '#F28144',
    accent2: '#FFD24A',
    accent3: '#A4CC35',
    accent4: '#26C99E',
    accent5: '#66BFFF',
    accent6: '#CC78FA',
    accent7: '#F553BF',

    // shade0-7 should be shades of the same hue, with shade0 being the
    // background and shade7 being the foreground. If you omit the
    // intermediate shades (1 through 6), they will be calculated automatically
    // for you.
    shade0: '#282629',
    shade1: '#474247',
    shade2: '#656066',
    shade3: '#847E85',
    shade4: '#A29DA3',
    shade5: '#C1BCC2',
    shade6: '#E0DCE0',
    shade7: '#FFFCFF'

  },

  // Same as above, except that shade0 should be the lightest and shade7 should
  // be the darkest.
  light: { ... },

};
```

_Pro Tip: you can use [`themer`'s Web UI](https://themer.dev) to more easily select your colors, then click the "Download" button to generate a `colors.js` file._

Then pass the path to your JS file to the `--colors` argument of `themer`.

```
themer -c path/to/my/colors.js ...
```

#### Color mappings

To help you choose colors for your own color set, this is approximately how most `themer` templates will utilize your colors:

| Color Key | Typical Usage |
| --------- | ------------- |
| `accent0` | error, VCS deletion |
| `accent1` | syntax |
| `accent2` | warning, VCS modification |
| `accent3` | success, VCS addition |
| `accent4` | syntax |
| `accent5` | syntax |
| `accent6` | syntax, caret/cursor |
| `accent7` | syntax, special |
| `shade0` | background color |
| `shade1` | UI |
| `shade2` | UI, text selection |
| `shade3` | UI, code comments |
| `shade4` | UI |
| `shade5` | UI |
| `shade6` | foreground text |
| `shade7` | foreground text |

See [`themer`'s Web UI](https://themer.dev) for a more visual representation of the color mappings.

#### Tips

* If you omit `shade1` through `shade6`, `themer` will interpolate them automatically for you, using [color-steps](https://github.com/mjswensen/color-steps).
* `themer` supports any valid CSS color format; that means you can use `chartreuse`, `rgb(127, 255, 0)`, `rgb(50%, 100%, 0%)`, `#7FFF00`, `hsl(90, 100%, 50%)`, etc.
* I would recommend checking your color set into your dotfiles repo. Once you've fine-tuned it, you might consider publishing it to npm for others to use! (If you do, consider naming your package starting with `themer-colors-` so that others can easily find it.)

### Using base16 schemes with Themer

In place of a themer color set file or npm package, you can also provide `themer` with any base16 scheme YAML file.

```
themer --colors path/to/base16-scheme.yml ...
```

Refer to the [base16 repository](https://github.com/chriskempson/base16#scheme-repositories) for a list of base16 schemes.

## Themer templates

### Terminals

* [@themer/alacritty](https://github.com/mjswensen/themer/tree/master/cli/packages/alacritty)
* [themer-hyper](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-hyper)
* [themer-iterm](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-iterm)
* [themer-terminal](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-terminal)
* [agarrharr/themer-gnome-terminal](https://github.com/agarrharr/themer-gnome-terminal)
* [themer-conemu](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-conemu)
* [@themer/cmd](https://github.com/mjswensen/themer/tree/master/cli/packages/cmd)
* [0x52a1/themer-termite](https://github.com/0x52a1/themer-termite)
* [0x52a1/themer-kitty](https://github.com/0x52a1/themer-kitty)

### Editors/IDEs

* [@themer/atom-syntax](https://github.com/mjswensen/themer/tree/master/cli/packages/atom-syntax)
* [@themer/atom-ui](https://github.com/mjswensen/themer/tree/master/cli/packages/atom-ui)
* [themer-sublime-text](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-sublime-text)
* [themer-vim](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-vim)
* [themer-vim-lightline](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-vim-lightline)
* [themer-vscode](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-vscode)
* [themer-xcode](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-xcode)
* [@themer/bbedit](https://github.com/mjswensen/themer/tree/master/cli/packages/bbedit)
* [tomselvi/themer-jetbrains](https://github.com/tomselvi/themer-jetbrains)

### Wallpapers

* [themer-wallpaper-block-wave](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-block-wave)
* [themer-wallpaper-octagon](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-octagon)
* [themer-wallpaper-triangles](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-triangles)
* [themer-wallpaper-trianglify](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-trianglify)
* [themer-wallpaper-shirts](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-shirts)
* [themer-wallpaper-diamonds](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-diamonds)

### Other

* [themer-slack](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-slack)
* [@themer/alfred](https://github.com/mjswensen/themer/tree/master/cli/packages/alfred)
* [themer-firefox-addon](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-firefox-addon)
* [themer-firefox-color](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-firefox-color)
* [@themer/brave](https://github.com/mjswensen/themer/tree/master/cli/packages/brave)
* [@themer/chrome](https://github.com/mjswensen/themer/tree/master/cli/packages/chrome)
* [PDDStudio/themer-android](https://github.com/PDDStudio/themer-android)
* [themer-sketch-palettes](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-sketch-palettes)
* [tomselvi/themer-tmux](https://github.com/tomselvi/themer-tmux)

### Create your own template

To create your own template, create a JavaScript file that exports a `render` function, like so:

```js
module.exports.render = function(colors, options) {

  // colors is an object that will have one or both keys: 'light' and
  // 'dark', each being an object with keys 'accent0' through 'accent7'
  // and 'shade0' through 'shade7'.

  // options is an object representing the original command-line args
  // passed to themer. This allows you to add special arguments that
  // will apply only to your template. An example of this is allowing a
  // themer user to specify custom resolutions for rendering a wallpaper.

  // This function should return an array of Promises, each Promise
  // resolving to an object of the following structure:
  // {
  //   name: '<the name of the file to be written>', // can include subdirectories, too
  //   contents: <a Buffer of the contents of the file to be written>,
  // }

};
```

Your JS file can then be passed to a `--template` argument of `themer`. That's it!

Here's an [example template render function](https://github.com/mjswensen/themer/blob/master/cli/packages/themer-slack/lib/index.js) that generates a Slack sidebar theme from a `themer` color set.

Once you've developed your template, consider publishing it on npm (with repository name starting with `themer-`) so that others can use it!

## About

`themer` is inspired by [trevordmiller/nova](https://github.com/trevordmiller/nova/) and [chriskempson/base16](http://chriskempson.com/projects/base16/).

Conceptually, `themer` is very similar to [base16](http://chriskempson.com/projects/base16/), but:

1. It is lighter, and simpler to use.
2. It is more easily extensible with your own color sets and templates.
3. It integrates better with your dotfiles, especially if you keep them under version control.

## Themer's Web UI

If you'd prefer to develop your themes visually, check out [`themer`'s Web UI](https://themer.dev), an offline-ready Progressive Web App.

<p align="center">
  <a href="https://themer.mjswensen.com">
    <img src="icon.png" width="256" height="256" alt="Themer application icon" />
  </a>
</p>

# themer [![Travis](https://img.shields.io/travis/mjswensen/themer.svg)](https://travis-ci.org/mjswensen/themer) [![npm](https://img.shields.io/npm/dt/themer.svg)](https://github.com/mjswensen/themer#installation)

`themer` takes a set of colors and generates [editor themes](#editorsides), [terminal themes](#terminals), [themes for other apps](#other), and [desktop/device wallpapers](#wallpapers).

![visual description](/assets/themer-description.png)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Example workflow](#example-workflow)
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
* [Themer GUI](#themer-gui)

## Installation

_Don't love the command-line? Check out [the GUI](https://github.com/mjswensen/themer-gui)._

```sh
mkdir my-dotfiles && cd my-dotfiles
npm install themer
```

If you do not keep your dotfiles under version control, you can simply install themer globally with `npm -g install themer`.

## Usage

```sh
themer --colors <file OR npm module name> \
  --template <file OR npm module name> \
  [--template <file OR npm module name>...] \
  --out <directory>
```

`themer` can create themes from your custom color sets (see ["Create your own color set"](#create-your-own-color-set) below) or from color sets published on npm (see [themer-colors-default](https://github.com/mjswensen/themer-colors-default)). The same is true for templates.

### Example workflow

Say you wanted to generate a vim theme and desktop background using `themer`'s default color set. First, install `themer`, the color set, and the templates:

```sh
cd my-dotfiles
npm install themer themer-colors-default themer-vim themer-wallpaper-block-wave
```

Then edit your `package.json`:

```json
  ...
  "scripts": {
    "build": "themer -c themer-colors-default -t themer-vim -t themer-wallpaper-block-wave -o gen"
  },
  ...
```

Then run your new script:

```sh
npm run build
```

Now check the `gen/` folder for your generated themes. Here's the result:

![example usage result](/assets/example-usage.png)

## Themer color sets

### Original color sets

| Name | Dark Preview | Light Preview |
| --- | --- | --- |
| [themer-colors-default](https://github.com/mjswensen/themer-colors-default) | ![themer-colors-default dark preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-default-dark-swatch.svg) | ![themer-colors-default light preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-default-light-swatch.svg) |
| [themer-colors-night-sky](https://github.com/mjswensen/themer-colors-night-sky) | ![themer-colors-night-sky dark preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-night-sky-dark-swatch.svg) | (dark only) |
| [themer-colors-polar-ice](https://github.com/mjswensen/themer-colors-polar-ice) | ![themer-colors-polar-ice dark preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-polar-ice-dark-swatch.svg) | ![themer-colors-polar-ice light preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-polar-ice-light-swatch.svg) |
| [themer-colors-finger-paint](https://github.com/mjswensen/themer-colors-finger-paint) | ![themer-colors-finger-paint dark preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-finger-paint-dark-swatch.svg) | ![themer-colors-finger-paint light preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-finger-paint-light-swatch.svg) |

### Ports from third-party themes

| Name | Dark Preview | Light Preview |
| --- | --- | --- |
| [themer-colors-one](https://github.com/mjswensen/themer-colors-one) | ![themer-colors-one dark preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-one-dark-swatch.svg) | ![themer-colors-one light preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-one-light-swatch.svg) |
| [themer-colors-lucid](https://github.com/mjswensen/themer-colors-lucid) | ![themer-colors-lucid dark preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-lucid-dark-swatch.svg) | ![themer-colors-lucid light preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-lucid-light-swatch.svg) |
| [themer-colors-solarized](https://github.com/mjswensen/themer-colors-solarized) | ![themer-colors-solarized dark preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-solarized-dark-swatch.svg) | ![themer-colors-solarized light preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-solarized-light-swatch.svg) |
| [themer-colors-github-universe](https://github.com/mjswensen/themer-colors-github-universe) | ![themer-colors-github-universe preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-github-universe-dark-swatch.svg) | (dark only) |
| [themer-colors-nova](https://github.com/mjswensen/themer-colors-nova) | ![themer-colors-nova preview](https://themer.mjswensen.com/themer-preview-swatch/themer-colors-nova-dark-swatch.svg) | (dark only) |

### Create your own color set

To create your own color set, create a JavaScript file that exports a `colors` object, like so:

```js
exports.colors = {

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

* [themer-hyper](https://github.com/mjswensen/themer-hyper)
* [themer-iterm](https://github.com/mjswensen/themer-iterm)
* [themer-terminal](https://github.com/mjswensen/themer-terminal)
* [agarrharr/themer-gnome-terminal](https://github.com/agarrharr/themer-gnome-terminal)
* [themer-conemu](https://github.com/mjswensen/themer-conemu)
* [themer-cmd](https://github.com/mjswensen/themer-cmd)
* [0x52a1/themer-termite](https://github.com/0x52a1/themer-termite)

### Editors/IDEs

* [themer-atom-syntax](https://github.com/mjswensen/themer-atom-syntax)
* [themer-atom-ui](https://github.com/mjswensen/themer-atom-ui)
* [themer-sublime-text](https://github.com/mjswensen/themer-sublime-text)
* [themer-vim](https://github.com/mjswensen/themer-vim)
* [themer-vim-lightline](https://github.com/mjswensen/themer-vim-lightline)
* [themer-vscode](https://github.com/mjswensen/themer-vscode)
* [themer-xcode](https://github.com/mjswensen/themer-xcode)
* [themer-bbedit](https://github.com/mjswensen/themer-bbedit)
* [tomselvi/themer-jetbrains](https://github.com/tomselvi/themer-jetbrains)

### Wallpapers

* [themer-wallpaper-block-wave](https://github.com/mjswensen/themer-wallpaper-block-wave)
* [themer-wallpaper-octagon](https://github.com/mjswensen/themer-wallpaper-octagon)
* [themer-wallpaper-triangles](https://github.com/mjswensen/themer-wallpaper-triangles)
* [themer-wallpaper-trianglify](https://github.com/mjswensen/themer-wallpaper-trianglify)

### Other

* [themer-slack](https://github.com/mjswensen/themer-slack)
* [themer-alfred](https://github.com/mjswensen/themer-alfred)
* [themer-chrome](https://github.com/mjswensen/themer-chrome)
* [PDDStudio/themer-android](https://github.com/PDDStudio/themer-android)
* [themer-sketch-palettes](https://github.com/mjswensen/themer-sketch-palettes)
* [tomselvi/themer-tmux](https://github.com/tomselvi/themer-tmux)

### Create your own template

To create your own template, create a JavaScript file that exports a `render` function, like so:

```js
exports.render = function(colors, options) {

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

Once you've developed your template, consider publishing it on npm (with repository name starting with `themer-`) so that others can use it!

## About

`themer` is inspired by [trevordmiller/nova](https://trevordmiller.github.io/nova/) and [chriskempson/base16](http://chriskempson.com/projects/base16/).

Conceptually, `themer` is very similar to [base16](http://chriskempson.com/projects/base16/), but:

1. It is lighter, and simpler to use.
2. It is more easily extensible with your own color sets and templates.
3. It integrates better with your dotfiles, especially if you keep them under version control.

## Themer GUI

If you'd prefer to develop your themes visually (and with a tight feedback loop), check out [`themer`'s GUI](https://github.com/mjswensen/themer-gui).

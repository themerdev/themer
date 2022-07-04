<p align="center">
  <a href="https://themer.dev">
    <img src="https://cdn.jsdelivr.net/gh/themerdev/themer@8af6e97f2d51b7002894ba86bb7b3fccf965efb9/assets/icon.png" width="384" alt="Themer logo" />
  </a>
</p>

# themer ![CI](https://github.com/themerdev/themer/workflows/CI/badge.svg?branch=main) [![Twitter Follow](https://img.shields.io/twitter/follow/themerdev?style=social)](https://twitter.com/themerdev)

`themer` takes a set of colors and generates [editor themes](#editorsides), [terminal themes](#terminals), [themes for other apps](#other), and [desktop/device wallpapers](#wallpapers).

![visual description](https://cdn.jsdelivr.net/gh/themerdev/themer@a186c8585721d5defbf4cb1bc94165144d4dd35a/assets/themer-description.png)

## Table of Contents

- [Support `themer`](#support-themer)
- [Installation](#installation)
- [Usage](#usage)
  - [Example workflow](#example-workflow)
  - [Example usage with `npx`](#example-usage-with-npx)
- [Themer color sets](#themer-color-sets)
  - [Original color sets](#original-color-sets)
  - [Ports from third-party themes](#ports-from-third-party-themes)
  - [Create your own color set](#create-your-own-color-set)
    - [Color mappings](#color-mappings)
    - [Tips](#tips)
  - [Using base16 schemes with Themer](#using-base16-schemes-with-themer)
- [Themer templates](#themer-templates)
  - [Terminals](#terminals)
  - [Editors/IDEs](#editorsides)
  - [Wallpapers](#wallpapers)
  - [Other](#other)
  - [Community](#community)
  - [Create your own template](#create-your-own-template)
- [About](#about)
- [Contributing](#contributing)
- [Themer's Web UI](#themers-web-ui)

## Support `themer`

- ⭐️ Star [`themer` on GitHub](https://github.com/themerdev/themer)
- 👋 Follow [@themerdev](https://twitter.com/themerdev) on Twitter
- 🦁 [Send a tip through the Brave Browser](https://brave.com/mjs684), either on [the repository page](https://github.com/themerdev/themer) or [`themer`'s Web UI](https://themer.dev)
- 💳 Pay what you want when downloading your theme from [themer.dev](https://themer.dev)
- 👑 Purchase a premium theme from [themer.dev](https://themer.dev)
- 💖 [Sponsor the @themerdev GitHub org](https://github.com/sponsors/themerdev)

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

`themer` can create themes from your custom color sets (see ["Create your own color set"](#create-your-own-color-set) below) or from color sets published on npm (see [@themerdev/colors-default](https://github.com/themerdev/themer/tree/main/cli/packages/colors-default)). The same is true for templates.

### Example workflow

Say you wanted to generate a vim theme and desktop background using `themer`'s default color set. First, install `themer`, the color set, and the templates:

```sh
cd my-dotfiles
npm install themer @themerdev/colors-default @themerdev/vim @themerdev/wallpaper-block-wave
```

Then edit your `package.json`:

```json
  ...
  "scripts": {
    "build": "themer -c @themerdev/colors-default -t @themerdev/vim -t @themerdev/wallpaper-block-wave -o gen"
  },
  ...
```

Then run your new script:

```sh
npm run build
```

Now check the `gen/` folder for your generated themes. Here's the result:

![example usage result](https://cdn.jsdelivr.net/gh/themerdev/themer@a186c8585721d5defbf4cb1bc94165144d4dd35a/assets/example-usage.png)

### Example usage with `npx`

```sh
npx \
  -p themer \
  -p @themerdev/colors-default \
  -p @themerdev/vim \
  -p @themerdev/wallpaper-block-wave \
  themer \
  -c @themerdev/colors-default \
  -t @themerdev/vim \
  -t @themerdev/wallpaper-block-wave \
  -o output
```

## Themer color sets

### Premium color sets

| Name                                          | Dark Preview                                                                                                                                           | Light Preview                                                                                                                                            |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Victor Mono](https://themer.dev/victor-mono) | ![Victor Mono dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@f9e890dc7ecd947eb05df702e11d252e3efd3b24/assets/preview/victor-mono-dark.png) | ![Victor Mono light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@f9e890dc7ecd947eb05df702e11d252e3efd3b24/assets/preview/victor-mono-light.png) |
| [Future Pro](https://themer.dev/future-pro)   | ![Future Pro dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@f9e890dc7ecd947eb05df702e11d252e3efd3b24/assets/preview/future-pro-dark.png)   | ![Future Pro light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@f9e890dc7ecd947eb05df702e11d252e3efd3b24/assets/preview/future-pro-light.png)   |

### Original color sets

| Name                                                                                                                         | Dark Preview                                                                                                                                                                                                | Light Preview                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@themerdev/colors-default](https://github.com/themerdev/themer/tree/main/cli/packages/colors-default)                       | ![@themerdev/colors-default dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-default-dark-swatch.svg)                       | ![@themerdev/colors-default light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-default-light-swatch.svg)                       |
| [@themerdev/colors-finger-paint](https://github.com/themerdev/themer/tree/main/cli/packages/colors-finger-paint)             | ![@themerdev/colors-finger-paint dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-finger-paint-dark-swatch.svg)             | ![@themerdev/colors-finger-paint light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-finger-paint-light-swatch.svg)             |
| [@themerdev/colors-green-as-a-whistle](https://github.com/themerdev/themer/tree/main/cli/packages/colors-green-as-a-whistle) | ![@themerdev/colors-green-as-a-whistle dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@ec9afc6d21d689e49b4816880dbe670a0d655951/assets/preview/themer-colors-green-as-a-whistle-dark-swatch.svg) | ![@themerdev/colors-green-as-a-whistle light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@ec9afc6d21d689e49b4816880dbe670a0d655951/assets/preview/themer-colors-green-as-a-whistle-light-swatch.svg) |
| [@themerdev/colors-monkey](https://github.com/themerdev/themer/tree/main/cli/packages/colors-monkey)                         | ![@themerdev/colors-monkey dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-monkey-dark-swatch.svg)                         | ![@themerdev/colors-monkey light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-monkey-light-swatch.svg)                         |
| [@themerdev/colors-night-sky](https://github.com/themerdev/themer/tree/main/cli/packages/colors-night-sky)                   | ![@themerdev/colors-night-sky dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-night-sky-dark-swatch.svg)                   | (dark only)                                                                                                                                                                                                   |
| [@themerdev/colors-polar-ice](https://github.com/themerdev/themer/tree/main/cli/packages/colors-polar-ice)                   | ![@themerdev/colors-polar-ice dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-polar-ice-dark-swatch.svg)                   | ![@themerdev/colors-polar-ice light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-polar-ice-light-swatch.svg)                   |
| [@themerdev/colors-right-in-the-teals](https://github.com/themerdev/themer/tree/main/cli/packages/colors-right-in-the-teals) | ![@themerdev/colors-right-in-the-teals dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-right-in-the-teals-dark-swatch.svg) | ![@themerdev/colors-right-in-the-teals light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-right-in-the-teals-light-swatch.svg) |

### Ports from third-party themes

| Name                                                                                                                   | Dark Preview                                                                                                                                                                                  | Light Preview                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@themerdev/colors-dracula](https://github.com/themerdev/themer/tree/main/cli/packages/colors-dracula)                 | ![@themerdev/colors-dracula dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@0a1c71ce1fd01ec56daca72be8b04db6d81b16b5/assets/preview/themer-colors-dracula-dark-swatch.svg)         | (dark only)                                                                                                                                                                                 |
| [@themerdev/colors-github-universe](https://github.com/themerdev/themer/tree/main/cli/packages/colors-github-universe) | ![!themer/colors-github-universe preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-github-universe-dark-swatch.svg) | (dark only)                                                                                                                                                                                 |
| [@themerdev/colors-lucid](https://github.com/themerdev/themer/tree/main/cli/packages/colors-lucid)                     | ![@themerdev/colors-lucid dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-lucid-dark-swatch.svg)             | ![@themerdev/colors-lucid light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-lucid-light-swatch.svg)         |
| [@themerdev/colors-mojave](https://github.com/themerdev/themer/tree/main/cli/packages/colors-mojave)                   | ![@themerdev/colors-mojave dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-mojave-dark-swatch.svg)           | ![@themerdev/colors-mojave light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-mojave-light-swatch.svg)       |
| [@themerdev/colors-nova](https://github.com/themerdev/themer/tree/main/cli/packages/colors-nova)                       | ![@themerdev/colors-nova preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-nova-dark-swatch.svg)                    | (dark only)                                                                                                                                                                                 |
| [@themerdev/colors-one](https://github.com/themerdev/themer/tree/main/cli/packages/colors-one)                         | ![@themerdev/colors-one dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-one-dark-swatch.svg)                 | ![@themerdev/colors-one light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-one-light-swatch.svg)             |
| [@themerdev/colors-rivet](https://github.com/themerdev/themer/tree/main/cli/packages/colors-rivet)                     | ![@themerdev/colors-rivet dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-rivet-dark-swatch.svg)             | ![@themerdev/colors-rivet light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-rivet-light-swatch.svg)         |
| [@themerdev/colors-seti](https://github.com/themerdev/themer/tree/main/cli/packages/colors-seti)                       | ![@themerdev/colors-seti dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@a0deeb0588fd67dec53ad506b302df9e493ad837/assets/preview/themer-colors-seti-dark-swatch.svg)               | (dark only)                                                                                                                                                                                 |
| [@themerdev/colors-solarized](https://github.com/themerdev/themer/tree/main/cli/packages/colors-solarized)             | ![@themerdev/colors-solarized dark preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-solarized-dark-swatch.svg)     | ![@themerdev/colors-solarized light preview](https://cdn.jsdelivr.net/gh/themerdev/themer@399430ac7b58691dc436761b1a03614898df92ba/assets/preview/themer-colors-solarized-light-swatch.svg) |

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

| Color Key | Typical Usage             | Conventional Color\* |
| --------- | ------------------------- | -------------------- |
| `accent0` | error, VCS deletion       | Red                  |
| `accent1` | syntax                    | Orange               |
| `accent2` | warning, VCS modification | Yellow               |
| `accent3` | success, VCS addition     | Green                |
| `accent4` | syntax                    | Cyan                 |
| `accent5` | syntax                    | Blue                 |
| `accent6` | syntax, caret/cursor      |                      |
| `accent7` | syntax, special           | Magenta              |
| `shade0`  | background color          |                      |
| `shade1`  | UI                        |                      |
| `shade2`  | UI, text selection        |                      |
| `shade3`  | UI, code comments         |                      |
| `shade4`  | UI                        |                      |
| `shade5`  | UI                        |                      |
| `shade6`  | foreground text           |                      |
| `shade7`  | foreground text           |                      |

_\*Conventional color is suggested for consistency with ANSI color names in terminal themes, but is not a hard requirement._

See [`themer`'s Web UI](https://themer.dev) for a more visual representation of the color mappings.

#### Tips

- If you omit `shade1` through `shade6`, `themer` will interpolate them automatically for you, using [color-steps](https://github.com/mjswensen/color-steps).
- `themer` supports any valid CSS color format; that means you can use `chartreuse`, `rgb(127, 255, 0)`, `rgb(50%, 100%, 0%)`, `#7FFF00`, `hsl(90, 100%, 50%)`, etc.
- I would recommend checking your color set into your dotfiles repo. Once you've fine-tuned it, you might consider publishing it to npm for others to use! (If you do, consider naming your package starting with `themer-colors-` so that others can easily find it.)

### Using base16 schemes with Themer

In place of a themer color set file or npm package, you can also provide `themer` with any base16 scheme YAML file.

```
themer --colors path/to/base16-scheme.yml ...
```

Refer to the [base16 repository](https://github.com/chriskempson/base16#scheme-repositories) for a list of base16 schemes.

## Themer templates

### Terminals

- [@themerdev/alacritty](https://github.com/themerdev/themer/tree/main/cli/packages/alacritty)
- [@themerdev/cmd](https://github.com/themerdev/themer/tree/main/cli/packages/cmd)
- [@themerdev/conemu](https://github.com/themerdev/themer/tree/main/cli/packages/conemu)
- [@themerdev/hyper](https://github.com/themerdev/themer/tree/main/cli/packages/hyper)
- [@themerdev/iterm](https://github.com/themerdev/themer/tree/main/cli/packages/iterm)
- [@themerdev/kitty](https://github.com/themerdev/themer/tree/main/cli/packages/kitty)
- [@themerdev/konsole](https://github.com/themerdev/themer/tree/main/cli/packages/konsole)
- [@themerdev/terminal](https://github.com/themerdev/themer/tree/main/cli/packages/terminal)
- [@themerdev/terminator](https://github.com/themerdev/themer/tree/main/cli/packages/terminator)
- [@themerdev/windows-terminal](https://github.com/themerdev/themer/tree/main/cli/packages/windows-terminal)

### Editors/IDEs

- [@themerdev/atom-syntax](https://github.com/themerdev/themer/tree/main/cli/packages/atom-syntax)
- [@themerdev/atom-ui](https://github.com/themerdev/themer/tree/main/cli/packages/atom-ui)
- [@themerdev/bbedit](https://github.com/themerdev/themer/tree/main/cli/packages/bbedit)
- [@themerdev/emacs](https://github.com/themerdev/themer/tree/main/cli/packages/emacs)
- [@themerdev/sublime-text](https://github.com/themerdev/themer/tree/main/cli/packages/sublime-text)
- [@themerdev/vim-lightline](https://github.com/themerdev/themer/tree/main/cli/packages/vim-lightline)
- [@themerdev/vim](https://github.com/themerdev/themer/tree/main/cli/packages/vim)
- [@themerdev/visual-studio](https://github.com/themerdev/themer/tree/main/cli/packages/visual-studio)
- [@themerdev/vscode](https://github.com/themerdev/themer/tree/main/cli/packages/vscode)
- [@themerdev/xcode](https://github.com/themerdev/themer/tree/main/cli/packages/xcode)

### Wallpapers

- [@themerdev/wallpaper-block-wave](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-block-wave)
- [@themerdev/wallpaper-burst](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-burst)
- [@themerdev/wallpaper-circuits](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-circuits)
- [@themerdev/wallpaper-diamonds](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-diamonds)
- [@themerdev/wallpaper-dot-grid](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-dot-grid)
- [@themerdev/wallpaper-octagon](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-octagon)
- [@themerdev/wallpaper-shirts](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-shirts)
- [@themerdev/wallpaper-triangles](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-triangles)
- [@themerdev/wallpaper-trianglify](https://github.com/themerdev/themer/tree/main/cli/packages/wallpaper-trianglify)

### Other

- [@themerdev/alfred](https://github.com/themerdev/themer/tree/main/cli/packages/alfred)
- [@themerdev/brave](https://github.com/themerdev/themer/tree/main/cli/packages/brave)
- [@themerdev/chrome](https://github.com/themerdev/themer/tree/main/cli/packages/chrome)
- [@themerdev/css](https://github.com/themerdev/themer/tree/main/cli/packages/css)
- [@themerdev/firefox-addon](https://github.com/themerdev/themer/tree/main/cli/packages/firefox-addon)
- [@themerdev/firefox-color](https://github.com/themerdev/themer/tree/main/cli/packages/firefox-color)
- [@themerdev/kde-plasma-colors](https://github.com/themerdev/themer/tree/main/cli/packages/kde-plasma-colors)
- [@themerdev/keypirinha](https://github.com/themerdev/themer/tree/main/cli/packages/keypirinha)
- [@themerdev/prism](https://github.com/themerdev/themer/tree/main/cli/packages/prism)
- [@themerdev/sketch-palettes](https://github.com/themerdev/themer/tree/main/cli/packages/sketch-palettes)
- [@themerdev/slack](https://github.com/themerdev/themer/tree/main/cli/packages/slack)
- [@themerdev/wox](https://github.com/themerdev/themer/tree/main/cli/packages/wox)
- [@themerdev/xresources](https://github.com/themerdev/themer/tree/main/cli/packages/xresources)

### Community

- [~0x52a1/themer-kitty](https://www.npmjs.com/package/themer-kitty)
- [~0x52a1/themer-termite](https://www.npmjs.com/package/themer-termite)
- [~agarrharr/themer-gnome-terminal](https://www.npmjs.com/package/themer-gnome-terminal)
- [~dguo/themer-colors-blood-moon](https://www.npmjs.com/package/themer-colors-blood-moon)
- [~dtkerr/themer-i3](https://www.npmjs.com/package/themer-i3)
- [~dtkerr/themer-m4](https://www.npmjs.com/package/themer-m4)
- [~jtroyer/themer-mattermost](https://www.npmjs.com/package/themer-mattermost)
- [~lafleurdeboum/themer-powerline-rs](https://www.npmjs.com/package/themer-powerline-rs)
- [~rubenverg/themer-windows-terminal](https://www.npmjs.com/package/themer-windows-terminal)
- [~tomselvi/themer-jetbrains](https://www.npmjs.com/package/themer-jetbrains)
- [~tomselvi/themer-mintty](https://www.npmjs.com/package/themer-mintty)
- [~tomselvi/themer-tmux](https://www.npmjs.com/package/themer-tmux)

### Create your own template

To create your own template, create a JavaScript file that exports a `render` function, like so:

```js
module.exports.render = function (colors, options) {
  /*

  colors is an object that will have one or both keys: 'light' and
  'dark', each being an object with keys 'accent0' through 'accent7'
  and 'shade0' through 'shade7'.

  options is an object representing the original command-line args
  passed to themer. This allows you to add special arguments that
  will apply only to your template. An example of this is allowing a
  themer user to specify custom resolutions for rendering a wallpaper.

  This function should return an array of Promises, each Promise
  resolving to an object of the following structure:
  {
    name: '<the name of the file to be written>', // can include subdirectories, too
    contents: <a Buffer of the contents of the file to be written>,
  }

  */
};
```

Your JS file can then be passed to a `--template` argument of `themer`. That's it!

Here's an [example template render function](https://github.com/themerdev/themer/blob/main/cli/packages/slack/lib/index.js) that generates a Slack sidebar theme from a `themer` color set.

Once you've developed your template, consider publishing it on npm so that others can use it!

## About

`themer` is inspired by [trevordmiller/nova](https://github.com/trevordmiller/nova/) and [chriskempson/base16](http://chriskempson.com/projects/base16/).

Conceptually, `themer` is very similar to [base16](http://chriskempson.com/projects/base16/), but:

1. It is lighter, and simpler to use.
2. It is more easily extensible with your own color sets and templates.
3. It integrates better with your dotfiles, especially if you keep them under version control.

## Contributing

For instructions on how to contribute to `themer`, see [CONTRIBUTING.md](https://github.com/themerdev/themer/blob/main/.github/CONTRIBUTING.md) and [`themer`'s code of conduct](https://github.com/themerdev/themer/blob/main/CODE_OF_CONDUCT.md).

## Themer's Web UI

If you'd prefer to develop your themes visually, check out [`themer`'s Web UI](https://themer.dev), an offline-ready Progressive Web App.

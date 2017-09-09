<p align="center">
  <a href="https://themer.mjswensen.com">
    <img src="icon.png" width="256" height="256" alt="Themer application icon" />
  </a>
</p>

# themer [![Travis](https://img.shields.io/travis/mjswensen/themer.svg)](https://travis-ci.org/mjswensen/themer)

`themer` takes a set of colors and generates [editor themes](#editorsides), [terminal themes](#terminals), and [desktop/device wallpapers](#wallpapers).

![visual description](/assets/themer-description.png)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Example workflow](#example-workflow)
* [Themer color sets](#themer-color-sets)
  * [Create your own color set](#create-your-own-color-set)
* [Themer templates](#themer-templates)
  * [Terminals](#terminals)
  * [Editors/IDEs](#editorsides)
  * [Wallpapers](#wallpapers)
  * [Other](#other)
  * [Create your own template](#create-your-own-template)
* [About](#about)
* [Themer GUI](#themer-gui)
* [Sponsor](#sponsor)

## Installation

_Don't love the command-line? Check out [the GUI](https://github.com/mjswensen/themer-gui)._

    mkdir my-dotfiles && cd my-dotfiles
    npm install themer

If you do not keep your dotfiles under version control, you can simply install themer globally with `npm -g install themer`.

## Usage

    themer --colors <file OR npm module name> \
      --template <file OR npm module name> \
      [--template <file OR npm module name>...] \
      --out <directory>

`themer` can create themes from your custom color sets (see ["Create your own color set"](#create-your-own-color-set) below) or from color sets published on npm (see [themer-colors-default](https://github.com/mjswensen/themer-colors-default)). The same is true for templates.

### Example workflow

Say you wanted to generate a vim theme and desktop background using `themer`'s default color set. First, install `themer`, the color set, and the templates:

    cd my-dotfiles
    npm install themer themer-colors-default themer-vim themer-wallpaper-block-wave

Then edit your `package.json`:

    ...
    "scripts: {
      "build": "themer -c themer-colors-default -t themer-vim -t themer-wallpaper-block-wave -o gen"
    },
    ...

Then run your new script:

    npm run build

Now check the `gen/` folder for your generated themes. Here's the result:

![example usage result](/assets/example-usage.png)

## Themer color sets

| Name | Dark Preview | Light Preview |
| --- | --- | --- |
| [themer-colors-default](https://github.com/mjswensen/themer-colors-default) | ![themer-colors-default dark preview](https://themer.mjswensen.com/color-set-previews/themer-colors-default-dark-full.svg) | ![themer-colors-default light preview](https://themer.mjswensen.com/color-set-previews/themer-colors-default-light-full.svg) |
| [themer-colors-night-sky](https://github.com/mjswensen/themer-colors-night-sky) | ![themer-colors-night-sky dark preview](https://themer.mjswensen.com/color-set-previews/themer-colors-night-sky-dark-full.svg) | (dark only) |
| [themer-colors-one](https://github.com/mjswensen/themer-colors-one) | ![themer-colors-one dark preview](https://themer.mjswensen.com/color-set-previews/themer-colors-one-dark-full.svg) | ![themer-colors-one light preview](https://themer.mjswensen.com/color-set-previews/themer-colors-one-light-full.svg) |
| [themer-colors-polar-ice](https://github.com/mjswensen/themer-colors-polar-ice) | ![themer-colors-polar-ice dark preview](https://themer.mjswensen.com/color-set-previews/themer-colors-polar-ice-dark-full.svg) | ![themer-colors-polar-ice light preview](https://themer.mjswensen.com/color-set-previews/themer-colors-polar-ice-light-full.svg) |

### Create your own color set

To create your own color set, create a JavaScript file that exports a `colors` object, like so:

    exports.colors = {
      dark: { // A color set can have both light and dark variants, but doesn't have to.

        accent0: '#FF4050', // accent0-7 should be the main accent colors of your theme.
        ...
        accent7: '#F553BF',

        shade0: '#282629', // shade0-7 should be shades of the same hue, with shade0 being the darkest and shade7 being the lightest.
        ...
        shade7: '#FFFCFF'

      },
      light: { ... }, // same as above, except that shade0 should be the lightest and shade7 should be the darkest.
    };

At this point, your JS file can be passed to the `--colors` argument of `themer`.

Refer to [themer-colors-default](https://github.com/mjswensen/themer-colors-default) for an example.

I would recommend checking your color set into your dotfiles repo. Once you've fine-tuned it, you might consider publishing it to npm for others to use! (If you do, consider naming your repo starting with `themer-colors-` so that others can easily find it.)

## Themer templates

### Terminals

* [themer-hyper](https://github.com/mjswensen/themer-hyper)
* [themer-iterm](https://github.com/mjswensen/themer-iterm)
* [themer-terminal](https://github.com/mjswensen/themer-terminal)
* [agarrharr/themer-gnome-terminal](https://github.com/agarrharr/themer-gnome-terminal)

### Editors/IDEs

* [themer-atom-syntax](https://github.com/mjswensen/themer-atom-syntax)
* [themer-sublime-text](https://github.com/mjswensen/themer-sublime-text)
* [themer-vim](https://github.com/mjswensen/themer-vim)
* [themer-vim-lightline](https://github.com/mjswensen/themer-vim-lightline)
* [themer-vscode](https://github.com/mjswensen/themer-vscode)
* [themer-xcode](https://github.com/mjswensen/themer-xcode)

### Wallpapers

* [themer-wallpaper-block-wave](https://github.com/mjswensen/themer-wallpaper-block-wave)
* [themer-wallpaper-octagon](https://github.com/mjswensen/themer-wallpaper-octagon)
* [themer-wallpaper-triangles](https://github.com/mjswensen/themer-wallpaper-triangles)

### Other

* [themer-slack](https://github.com/mjswensen/themer-slack)
* [themer-alfred](https://github.com/mjswensen/themer-alfred)

### Create your own template

To create your own template, create a JavaScript file that exports a `render` function, like so:

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

## Sponsor

[![Sponsor](https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer.svg)](https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer)

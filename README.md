A [Hyper.app](https://hyper.is/) plugin generator for mjswensen/themer.

## Installation & usage

Install this module wherever you have `themer` installed:

    yarn add themer-hyper

Then pass `themer-hyper` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-hyper -o gen

`themer-hyper` will generate a `themer-hyper-dark.js` or `themer-hyper-light.js` (or both), depending on which color set you passed to `themer`.

To install your generated plugin, edit `~/.hyper.js` and add the path to the `localPlugins` array:

    ...
    localPlugins: [
      '/path/to/themer-hyper-dark.js`,
    ],
    ...


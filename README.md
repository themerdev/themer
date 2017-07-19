# themer-hyper [![Travis](https://img.shields.io/travis/mjswensen/themer-hyper.svg)](https://travis-ci.org/mjswensen/themer-hyper)

[![Sponsor](https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-hyper.svg)](https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-hyper)

A [Hyper.app](https://hyper.is/) plugin generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-hyper

Then pass `themer-hyper` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-hyper -o gen

`themer-hyper` will generate a `themer-hyper-dark/` or `themer-hyper-light/` directory (or both), depending on which color set you passed to `themer`, which will contain the files for a Hyper theme plugin package.

To install your generated plugin, first symlink the outputted package directory to the Hyper local plugins directory:

    ln -s <full path to themer output directory>/themer-hyper/themer-hyper-dark ~/.hyper_plugins/local/

Finally, edit `~/.hyper.js` and add the package to the `localPlugins` array:

    ...
    localPlugins: [
      'themer-hyper-dark'
    ],
    ...

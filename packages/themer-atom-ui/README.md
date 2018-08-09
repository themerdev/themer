# themer-atom-ui [![Travis](https://img.shields.io/travis/mjswensen/themer-atom-ui.svg)](https://travis-ci.org/mjswensen/themer-atom-ui)

An Atom UI theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed (note that this package requires `themer@2.1.0` or newer.):

    npm install themer-atom-ui

Then pass `themer-atom-ui` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-atom-ui -o gen

## Output

`themer-atom-ui` will generate a `themer-dark-ui/` or `themer-light-ui/` directory (or both), depending on the color set you passed to themer, which will contain the files for a UI theme Atom package.

To install the packages to Atom, use the `apm link` command:

    cd <themer output directory>/themer-atom-ui/
    apm link themer-dark-ui/
    apm link themer-light-ui/

Finally, open/reload Atom and select "Themer Dark" or "Themer Light" in the list of available UI themes.

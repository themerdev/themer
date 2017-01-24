# themer-sublime-text [![Travis](https://img.shields.io/travis/mjswensen/themer-sublime-text.svg)](https://travis-ci.org/mjswensen/themer-sublime-text)

A Sublime Text theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    yarn add themer-sublime-text

Then pass `themer-sublime-text` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-sublime-text -o gen

`themer-sublime-text` will generate a `themer-sublime-text-dark.tmTheme` or a `themer-sublime-text-light.tmTheme` (or both), depending on the color set you passed to `themer`.

Finally, copy (or symlink) your new theme file(s) to the `User/` packages folder (you can see where this folder is by choosing the "Browse Packages..." menu option in Sublime Text). You'll then be able to choose the theme from the list of available color themes.

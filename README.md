# themer-iterm [![Travis](https://img.shields.io/travis/mjswensen/themer-iterm.svg)](https://travis-ci.org/mjswensen/themer-iterm)

An [iTerm](https://www.iterm2.com/) theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed.

    npm install themer-iterm

Then pass `themer-iterm` as a `-t` (`--template`) argument to `themer`:

    themer -c my-colors.js -t themer-iterm -o gen/

`themer-iterm` will generate a `themer-iterm-dark.itermcolors` or `themer-iterm-light.itermcolors` (or both), depending on which color set you passed to `themer`.

To install your theme, press `cmd`-`i` to open the iTerm preferences, then choose Colors > Color Presets... > Import... and choose the generated files.

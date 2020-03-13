# themer-sketch-palettes

A [themer](https://github.com/mjswensen/themer) template for generating files compatible with the [andrewfiorillo/sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) Sketch plugin.

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-sketch-palettes

Then pass `themer-sketch-palettes` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-sketch-palettes -o gen

Installation instructions for the generated theme file(s) will be included in `<output dir>/README.md`.

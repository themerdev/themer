# @themerdev/sketch-palettes

A [themer](https://github.com/themerdev/themer) template for generating files compatible with the [andrewfiorillo/sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) Sketch plugin.

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themerdev/sketch-palettes

Then pass `@themerdev/sketch-palettes` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.mjs -t @themerdev/sketch-palettes -o gen

Installation instructions for the generated theme file(s) will be included in `<output dir>/README.md`.

# themer-sketch-palettes

A [themer](https://github.com/mjswensen/themer) template for generating files compatible with the [andrewfiorillo/sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) Sketch plugin.

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-sketch-palettes

Then pass `themer-sketch-palettes` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-sketch-palettes -o gen

## Output

`themer-sketch-palettes` will generate a `themer-sketch-palettes-dark.sketchpalette` / `themer-sketch-palettes-light.sketchpalette` (or both) in your output directory, which may then be loaded into Sketch through the [sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin.

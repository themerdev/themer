# themer-prism

A PrismJS theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-prism

Then pass `themer-prism` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-prism -o gen

## Output

`themer-prism` will generate a `themer-prism-dark.css` or `themer-prism-light.css` file (or both), depending on the color set you passed to themer.

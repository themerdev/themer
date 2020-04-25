# @themer/vscode

A VS Code theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer^2.1.0` installed:

    npm install @themer/vscode

Then pass `@themer/vscode` as a `-t` (`--template`) argument to `themer`:

    themer -c my-colors.js -t @themer/vscode -o gen

Installation instructions for the generated theme package will be included in `<output dir>/README.md`.

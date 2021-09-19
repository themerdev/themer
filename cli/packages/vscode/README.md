# @themerdev/vscode

A VS Code theme generator for [themer](https://github.com/themerdev/themer).

## Installation & usage

Install this module wherever you have `themer^2.1.0` installed:

    npm install @themerdev/vscode

Then pass `@themerdev/vscode` as a `-t` (`--template`) argument to `themer`:

    themer -c my-colors.js -t @themerdev/vscode -o gen

Installation instructions for the generated theme package will be included in `<output dir>/README.md`.

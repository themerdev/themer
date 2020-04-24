# @themer/cmd

A CMD.exe theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themer/cmd

Then pass `@themer/cmd` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themer/cmd -o gen

Installation instructions for the generated theme file(s) will be included in `<output dir>/README.md`.

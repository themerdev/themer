# themer-terminal

A Terminal.app theme generator for [themer](https://github.com/mjswensen/themer).

## Dependencies

This module utilizes [Swift](https://swift.org/) and the [AppKit](https://developer.apple.com/reference/appkit) library to create the contents of the theme file. Install Xcode and you should be good to go.

## Installation & usage

Install this module wherever you have `themer` installed.

    npm install themer-terminal

Then pass `themer-terminal` as a `-t` (`--template`) argument to `themer`:

    themer -c my-colors.js -t themer-terminal -o gen/

Installation instructions for the generated theme file(s) will be included in `<output dir>/README.md`.

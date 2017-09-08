# themer-xcode [![Travis](https://img.shields.io/travis/mjswensen/themer-xcode.svg)](https://travis-ci.org/mjswensen/themer-xcode)

An Xcode theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-xcode

Then pass `themer-xcode` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-xcode -o gen

`themer-xcode` will generate a `themer-xcode-dark.dvtcolortheme` / `themer-xcode-light.dvtcolortheme` (or both) in your output directory.

Copy (or symlink) your theme(s) to `~/Library/Developer/Xcode/UserData/FontAndColorThemes/` (you can create this directory if it does not already exist), then restart Xcode. Your theme will then be available in Preferences > Fonts and Colors.

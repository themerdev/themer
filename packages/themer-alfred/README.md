# themer-alfred [![Travis](https://img.shields.io/travis/mjswensen/themer-alfred.svg)](https://travis-ci.org/mjswensen/themer-alfred)

An [Alfred.app](https://www.alfredapp.com/) theme generator for [themer](https://github.com/mjswensen/themer).

![themer Alfred preview](/assets/themer-alfred-preview.png)

(Generated with [themer's "Polar Ice" color set](https://github.com/mjswensen/themer/tree/master/packages/themer-colors-polar-ice) and shown with [themer's "Triangles" wallpaper template](https://github.com/mjswensen/themer/tree/master/packages/themer-wallpaper-triangles).)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-alfred

Then pass `themer-alfred` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-alfred -o gen

## Output

`themer-alfred` will generate a `themer-alfred-dark.alfredappearance` / `themer-alfred-light.alfredappearance` (or both) in your output directory. Simply double-click this file to import your theme into Alfred.

# themer-alfred

An [Alfred.app](https://www.alfredapp.com/) theme generator for [themer](https://github.com/mjswensen/themer).

![themer Alfred preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@a186c8585721d5defbf4cb1bc94165144d4dd35a/cli/packages/themer-alfred/assets/themer-alfred-preview.png)

(Generated with [themer's "Polar Ice" color set](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-colors-polar-ice) and shown with [themer's "Triangles" wallpaper template](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-triangles).)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-alfred

Then pass `themer-alfred` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-alfred -o gen

Installation instructions for the generated theme file(s) will be included in `<output dir>/README.md`.

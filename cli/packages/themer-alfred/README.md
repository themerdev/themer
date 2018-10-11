# themer-alfred

An [Alfred.app](https://www.alfredapp.com/) theme generator for [themer](https://github.com/mjswensen/themer).

![themer Alfred preview](https://cdn.jsdelivr.net/gh/mjswensen/themer@a186c8585721d5defbf4cb1bc94165144d4dd35a/cli/packages/themer-alfred/assets/themer-alfred-preview.png)

(Generated with [themer's "Polar Ice" color set](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-colors-polar-ice) and shown with [themer's "Triangles" wallpaper template](https://github.com/mjswensen/themer/tree/master/cli/packages/themer-wallpaper-triangles).)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-alfred

Then pass `themer-alfred` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-alfred -o gen

## Output

`themer-alfred` will generate a `themer-alfred-dark.alfredappearance` / `themer-alfred-light.alfredappearance` (or both) in your output directory. Simply double-click this file to import your theme into Alfred.

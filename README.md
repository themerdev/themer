# themer-wallpaper-triangles [![Travis](https://img.shields.io/travis/mjswensen/themer-wallpaper-triangles.svg)](https://travis-ci.org/mjswensen/themer-wallpaper-triangles)

A wallpaper template for [themer](https://github.com/mjswensen/themer). Here's a preview using [themer's default color set](https://github.com/mjswensen/themer-colors-default):

![dark desktop](https://cdn.rawgit.com/mjswensen/themer-wallpaper-triangles/ecf436f9edd35618c72ff8d944c9814b84809b2c/assets/desktop-dark.svg)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-wallpaper-triangles

Then pass `themer-wallpaper-triangles` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-wallpaper-triangles -o gen

`themer-wallpaper-triangles` will generate SVG wallpapers to the output directory (`gen/` in this example).

### Default resolutions

By default, `themer-wallpaper-triangles` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`themer-wallpaper-triangles` adds the following argument to `themer`:

    --themer-wallpaper-triangles-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t themer-wallpaper-triangles --themer-wallpaper-triangles-size 1024x768 --themer-wallpaper-triangles-size 320x960 -o gen

## Sponsor

[![Sponsor](https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-wallpaper-triangles.svg)](https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-wallpaper-triangles)

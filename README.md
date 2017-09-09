# themer-wallpaper-block-wave [![Travis](https://img.shields.io/travis/mjswensen/themer-wallpaper-block-wave.svg)](https://travis-ci.org/mjswensen/themer-wallpaper-block-wave)

A wallpaper template for [themer](https://github.com/mjswensen/themer). Here's a preview rendered using themer's default color set ([mjswensen/themer-colors-default](https://github.com/mjswensen/themer-colors-default)):

![desktop dark](https://cdn.rawgit.com/mjswensen/themer-wallpaper-block-wave/e64f5545b760f0c3882ac21d108fa6ba00174140/assets/desktop-dark.svg)
![desktop light](https://cdn.rawgit.com/mjswensen/themer-wallpaper-block-wave/e64f5545b760f0c3882ac21d108fa6ba00174140/assets/desktop-light.svg)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-wallpaper-block-wave

Then pass `themer-wallpaper-block-wave` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-wallpaper-block-wave -o gen

`themer-wallpaper-block-wave` will generate SVG wallpapers to the output directory (`gen/` in this example). (You can then convert them to a bitmap format, if necessary, [using Chrome](https://umaar.com/dev-tips/156-element-screenshot/) or other tools.)

### Default resolutions

By default, `themer-wallpaper-block-wave` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`themer-wallpaper-block-wave` adds the following argument to `themer`:

    --themer-wallpaper-block-wave-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t themer-wallpaper-block-wave --themer-wallpaper-block-wave-size 1024x768 --themer-wallpaper-block-wave-size 320x960 -o gen

## Sponsor

[![Sponsor](https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-wallpaper-block-wave.svg)](https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-wallpaper-block-wave)

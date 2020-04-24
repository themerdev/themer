# themer-wallpaper-octagon

A wallpaper template for [themer](https://github.com/mjswensen/themer). Here's a preview rendered using themer's default color set ([@themer/colors-default](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-default)):

![desktop dark](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/cli/packages/themer-wallpaper-octagon/assets/desktop-dark.svg)
![desktop light](https://cdn.jsdelivr.net/gh/mjswensen/themer@399430ac7b58691dc436761b1a03614898df92ba/cli/packages/themer-wallpaper-octagon/assets/desktop-light.svg)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-wallpaper-octagon

Then pass `themer-wallpaper-octagon` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-wallpaper-octagon -o gen

`themer-wallpaper-octagon` will generate SVG wallpapers to the output directory (`gen/` in this example).

The generated files will be listed in `<output dir>/README.md`.

### Default resolutions

By default, `themer-wallpaper-octagon` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`themer-wallpaper-octagon` adds the following argument to `themer`:

    --themer-wallpaper-octagon-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t themer-wallpaper-octagon --themer-wallpaper-octagon-size 1024x768 --themer-wallpaper-octagon-size 320x960 -o gen

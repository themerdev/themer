# @themer/wallpaper-block-wave

A wallpaper template for [themer](https://github.com/mjswensen/themer). Here's a preview rendered using themer's default color set ([@themer/colors-default](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-default)):

![desktop dark](https://cdn.jsdelivr.net/gh/mjswensen/themer@68cf78f754e4797e46ed5dfbe76168ddb85a2886/cli/packages/wallpaper-block-wave/assets/desktop-dark.png)
![desktop light](https://cdn.jsdelivr.net/gh/mjswensen/themer@68cf78f754e4797e46ed5dfbe76168ddb85a2886/cli/packages/wallpaper-block-wave/assets/desktop-light.png)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themer/wallpaper-block-wave

Then pass `@themer/wallpaper-block-wave` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themer/wallpaper-block-wave -o gen

`@themer/wallpaper-block-wave` will generate PNG wallpapers to the output directory (`gen/` in this example).

The generated files will be listed in `<output dir>/README.md`.

### Default resolutions

By default, `@themer/wallpaper-block-wave` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`@themer/wallpaper-block-wave` adds the following argument to `themer`:

    --themer-wallpaper-block-wave-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t @themer/wallpaper-block-wave --themer-wallpaper-block-wave-size 1024x768 --themer-wallpaper-block-wave-size 320x960 -o gen

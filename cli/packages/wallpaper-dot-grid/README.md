# @themer/wallpaper-dot-grid

A wallpaper template for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themer/wallpaper-dot-grid

Then pass `@themer/wallpaper-dot-grid` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themer/wallpaper-dot-grid -o gen

`@themer/wallpaper-dot-grid` will generate PNG wallpapers to the output directory (`gen/` in this example).

### Default resolutions

By default, `@themer/wallpaper-dot-grid` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`@themer/wallpaper-dot-grid` adds the following argument to `themer`:

    --themer-wallpaper-dot-grid-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t @themer/wallpaper-dot-grid --themer-wallpaper-dot-grid-size 1024x768 --themer-wallpaper-dot-grid-size 320x960 -o gen

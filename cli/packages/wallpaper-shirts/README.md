# @themer/wallpaper-shirts

A wallpaper template for [themer](https://github.com/mjswensen/themer). Here's a preview rendered using the [@themer/colors-monkey](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-monkey) color set:

![desktop dark](https://cdn.jsdelivr.net/gh/mjswensen/themer@48280edfda5a47233e18d754f3e5bc4ae4c40602/cli/packages/wallpaper-shirts/assets/themer-wallpaper-shirts-dark-2880-1800.png)
![desktop light](https://cdn.jsdelivr.net/gh/mjswensen/themer@48280edfda5a47233e18d754f3e5bc4ae4c40602/cli/packages/wallpaper-shirts/assets/themer-wallpaper-shirts-light-2880-1800.png)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themer/wallpaper-shirts

Then pass `@themer/wallpaper-shirts` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themer/wallpaper-shirts -o gen

`@themer/wallpaper-shirts` will generate PNG wallpapers to the output directory (`gen/` in this example).

The generated files will be listed in `<output dir>/README.md`.

### Default resolutions

By default, `@themer/wallpaper-shirts` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`@themer/wallpaper-shirts` adds the following argument to `themer`:

    --themer-wallpaper-shirts-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t @themer/wallpaper-shirts --themer-wallpaper-shirts-size 1024x768 --themer-wallpaper-shirts-size 320x960 -o gen

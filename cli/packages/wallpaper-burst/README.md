# @themer/wallpaper-burst

A wallpaper template for [themer](https://github.com/mjswensen/themer).

Shown here with [@themer/colors-solarized](https://github.com/mjswensen/themer/tree/master/cli/packages/colors-solarized):

![desktop dark](https://cdn.jsdelivr.net/gh/mjswensen/themer@d8bcb110cd259ee5aa7c7025cfe6f0b214e28554/cli/packages/wallpaper-burst/assets/themer-wallpaper-burst-dark-2880x1800.png)

![desktop light](https://cdn.jsdelivr.net/gh/mjswensen/themer@d8bcb110cd259ee5aa7c7025cfe6f0b214e28554/cli/packages/wallpaper-burst/assets/themer-wallpaper-burst-light-2880x1800.png)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themer/wallpaper-burst

Then pass `@themer/wallpaper-burst` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themer/wallpaper-burst -o gen

`@themer/wallpaper-burst` will generate PNG wallpapers to the output directory (`gen/` in this example).

### Default resolutions

By default, `@themer/wallpaper-burst` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`@themer/wallpaper-burst` adds the following argument to `themer`:

    --themer-wallpaper-burst-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t @themer/wallpaper-burst --themer-wallpaper-burst-size 1024x768 --themer-wallpaper-burst-size 320x960 -o gen


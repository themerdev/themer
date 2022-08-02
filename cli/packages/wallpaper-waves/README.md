# @themerdev/wallpaper-waves

A wallpaper template for [themer](https://github.com/themerdev/themer).

TODO: Add preview images

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themerdev/wallpaper-waves

Then pass `@themerdev/wallpaper-waves` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themerdev/wallpaper-waves -o gen

`@themerdev/wallpaper-waves` will generate PNG wallpapers to the output directory (`gen/` in this example).

### Default resolutions

By default, `@themerdev/wallpaper-waves` will output wallpapers at the following sizes:

- 2880 by 1800 (desktop)
- 750 by 1334 (device)

### Custom resolutions

`@themerdev/wallpaper-waves` adds the following argument to `themer`:

    --themer-wallpaper-waves-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t @themerdev/wallpaper-waves --themer-wallpaper-waves-size 1024x768 --themer-wallpaper-waves-size 320x960 -o gen

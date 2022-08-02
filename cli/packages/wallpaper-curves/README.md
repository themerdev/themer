# @themerdev/wallpaper-curves

A wallpaper template for [themer](https://github.com/themerdev/themer).

TODO: Add preview images

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themerdev/wallpaper-curves

Then pass `@themerdev/wallpaper-curves` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themerdev/wallpaper-curves -o gen

`@themerdev/wallpaper-curves` will generate PNG wallpapers to the output directory (`gen/` in this example).

### Default resolutions

By default, `@themerdev/wallpaper-curves` will output wallpapers at the following sizes:

- 2880 by 1800 (desktop)
- 750 by 1334 (device)

### Custom resolutions

`@themerdev/wallpaper-curves` adds the following argument to `themer`:

    --themer-wallpaper-curves-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t @themerdev/wallpaper-curves --themer-wallpaper-curves-size 1024x768 --themer-wallpaper-curves-size 320x960 -o gen

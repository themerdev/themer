# @themerdev/wallpaper-triangles

A wallpaper template for [themer](https://github.com/themerdev/themer). Here's a preview using [themer's default color set (dark variant)](https://github.com/themerdev/themer/tree/main/cli/packages/colors-default):

![dark desktop](https://cdn.jsdelivr.net/gh/themerdev/themer@3429c1e8916b7a2917885e3e93a81c969de9cd73/cli/packages/wallpaper-triangles/assets/themer-wallpaper-triangles-dark-2880x1800.png)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themerdev/wallpaper-triangles

Then pass `@themerdev/wallpaper-triangles` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.mjs -t @themerdev/wallpaper-triangles -o gen

`@themerdev/wallpaper-triangles` will generate PNG wallpapers to the output directory (`gen/` in this example).

The generated files will be listed in `<output dir>/README.md`.

### Default resolutions

By default, `@themerdev/wallpaper-triangles` will output wallpapers at the following sizes:

- 2880 by 1800 (desktop)
- 750 by 1334 (device)

### Custom resolutions

`@themerdev/wallpaper-triangles` adds the following argument to `themer`:

    --themer-wallpaper-triangles-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.mjs -t @themerdev/wallpaper-triangles --themer-wallpaper-triangles-size 1024x768 --themer-wallpaper-triangles-size 320x960 -o gen

# @themerdev/wallpaper-octagon

A wallpaper template for [themer](https://github.com/themerdev/themer). Here's a preview rendered using themer's default color set ([@themerdev/colors-default](https://github.com/themerdev/themer/tree/main/cli/packages/colors-default)):

![desktop dark](https://cdn.jsdelivr.net/gh/themerdev/themer@e9ed123af5093d0b6fd7ad6aa03344c9ecc132a1/cli/packages/wallpaper-octagon/assets/themer-wallpaper-octagon-dark-2880x1800.png)
![desktop light](https://cdn.jsdelivr.net/gh/themerdev/themer@e9ed123af5093d0b6fd7ad6aa03344c9ecc132a1/cli/packages/wallpaper-octagon/assets/themer-wallpaper-octagon-light-2880x1800.png)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themerdev/wallpaper-octagon

Then pass `@themerdev/wallpaper-octagon` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.mjs -t @themerdev/wallpaper-octagon -o gen

`@themerdev/wallpaper-octagon` will generate PNG wallpapers to the output directory (`gen/` in this example).

The generated files will be listed in `<output dir>/README.md`.

### Default resolutions

By default, `@themerdev/wallpaper-octagon` will output wallpapers at the following sizes:

- 2880 by 1800 (desktop)
- 750 by 1334 (device)

### Custom resolutions

`@themerdev/wallpaper-octagon` adds the following argument to `themer`:

    --themer-wallpaper-octagon-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.mjs -t @themerdev/wallpaper-octagon --themer-wallpaper-octagon-size 1024x768 --themer-wallpaper-octagon-size 320x960 -o gen

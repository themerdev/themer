# themer-wallpaper-octagon [![Travis](https://img.shields.io/travis/mjswensen/themer-wallpaper-octagon.svg)](https://travis-ci.org/mjswensen/themer-wallpaper-octagon)

A wallpaper template for [themer](https://github.com/mjswensen/themer). Here's a preview rendered using themer's default color set ([themer-colors-default](https://github.com/mjswensen/themer-colors-default)):

![desktop dark](https://cdn.rawgit.com/mjswensen/themer-wallpaper-octagon/05bea43827b8b5c66fc5a2fa3a57dd998354764d/assets/desktop-dark.svg)
![desktop light](https://cdn.rawgit.com/mjswensen/themer-wallpaper-octagon/05bea43827b8b5c66fc5a2fa3a57dd998354764d/assets/desktop-light.svg)

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-wallpaper-octagon

Then pass `themer-wallpaper-octagon` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-wallpaper-octagon -o gen

`themer-wallpaper-octagon` will generate SVG wallpapers to the output directory (`gen/` in this example).

### Default resolutions

By default, `themer-wallpaper-octagon` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

`themer-wallpaper-octagon` adds the following argument to `themer`:

    --themer-wallpaper-octagon-size

to which you would pass `<width>x<height>`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t themer-wallpaper-octagon --themer-wallpaper-octagon-size 1024x768 --themer-wallpaper-octagon-size 320x960 -o gen

## Sponsor

[![Sponsor](https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-wallpaper-octagon.svg)](https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-wallpaper-octagon)

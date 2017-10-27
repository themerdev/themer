# themer-conemu [![Travis](https://img.shields.io/travis/mjswensen/themer-conemu.svg)](https://travis-ci.org/mjswensen/themer-conemu)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-conemu'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-conemu.svg' />
</a>

A ConEmu theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-conemu

Then pass `themer-conemu` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-conemu -o gen

`themer-conemu` will generate a `themer-dark.xml` / `themer-light.xml` (or both) in your output directory.

To install your new theme:

1. Open the ConEmu settings and navigate to Features > Colors. Take note of the location of `ConEmu.xml` for later.
2. Create a new color scheme by typing a name in the "Schemes" field and clicking Save.
3. Close ConEmu.
4. Open `ConEmu.xml` and locate the color scheme name you typed in step 2.
5. Replace the `<value>` elements `ColorTable00` through `ColorTable31` with the contents of your themer-generated XML. Be sure to leave the others, like `ExtendColors`, etc. intact.
6. Open ConEmu and select your theme again in settings.

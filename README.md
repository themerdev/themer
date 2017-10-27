# themer-bbedit [![Travis](https://img.shields.io/travis/mjswensen/themer-bbedit.svg)](https://travis-ci.org/mjswensen/themer-bbedit)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-bbedit'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-bbedit.svg' />
</a>

A BBEdit theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-bbedit

Then pass `themer-bbedit` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-bbedit -o gen

`themer-bbedit` will generate a `Themer Dark.bbColorScheme` / `Themer Light.bbColorScheme` (or both) in your output directory.

Copy (or symlink) your theme(s) to `~/Library/Application Support/BBEdit/Color Schemes/`. Your theme will then be available in Preferences > Text Colors > Color Scheme.

# themer-cmd [![Travis](https://img.shields.io/travis/mjswensen/themer-cmd.svg)](https://travis-ci.org/mjswensen/themer-cmd)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-cmd'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-cmd.svg' />
</a>

A CMD.exe theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-cmd

Then pass `themer-cmd` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-cmd -o gen

`themer-cmd` will generate a `themer-dark.reg` / `themer-light.reg` (or both) in your output directory.

Simply double-click this file to add the color keys and values to the registry. The scheme of CMD can then be configured with the `color` command. For example, use `color 01` to set the background and foreground to your color set's default.

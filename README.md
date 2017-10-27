# themer-terminal [![Travis](https://img.shields.io/travis/mjswensen/themer-terminal.svg)](https://travis-ci.org/mjswensen/themer-terminal)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-terminal'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-terminal.svg' />
</a>

A Terminal.app theme generator for [themer](https://github.com/mjswensen/themer).

## Dependencies

This module utilizes [Swift](https://swift.org/) and the [AppKit](https://developer.apple.com/reference/appkit) library to create the contents of the theme file. Install Xcode and you should be good to go.

## Installation & usage

Install this module wherever you have `themer` installed.

    npm install themer-terminal

Then pass `themer-terminal` as a `-t` (`--template`) argument to `themer`:

    themer -c my-colors.js -t themer-terminal -o gen/

`themer-terminal` will generate a `themer-dark.terminal` or `themer-light.terminal` (or both), depending on which color set you passed to `themer`.

To install your theme, press `cmd`-`,` to open the Terminal.app preferences, then click Profile > (Gear Icon) > Import... and choose the generated files.

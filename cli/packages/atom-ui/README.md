# @themerdev/atom-ui

An Atom UI theme generator for [themer](https://github.com/themerdev/themer).

## Installation & usage

Install this module wherever you have `themer` installed (note that this package requires `themer@2.1.0` or newer.):

    npm install @themerdev/atom-ui

Then pass `@themerdev/atom-ui` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.mjs -t @themerdev/atom-ui -o gen

Installation instructions for the generated theme package(s) will be included in `<output dir>/README.md`.

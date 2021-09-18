# @themerdev/hyper

A [Hyper.app](https://hyper.is/) plugin generator for [themer](https://github.com/themerdev/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install @themerdev/hyper

Then pass `@themerdev/hyper` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t @themerdev/hyper -o gen

Installation instructions for the generated theme(s) will be included in `<output dir>/README.md`.

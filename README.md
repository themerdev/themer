# themer-chrome [![Travis](https://img.shields.io/travis/mjswensen/themer-chrome.svg)](https://travis-ci.org/mjswensen/themer-chrome)

An Chrome theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-chrome

Then pass `themer-chrome` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-chrome -o gen

`themer-chrome` will generate a `Themer Dark` or `Themer Light` directory (or both, depending on the color set you passed to `themer`) in your output path.

To install your generated theme:

1. Launch Chrome and go to `chrome://extensions`.
2. Check the "Developer mode" checkbox at the top.
3. Click the "Load unpacked extension..." button and choose your `Themer Dark` or `Themer Light` directory.

(To reset or remove your theme, visit `chrome://settings` and click "Reset to Default" in the "Appearance" section.)

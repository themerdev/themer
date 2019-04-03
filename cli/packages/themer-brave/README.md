# themer-brave

A [Brave](https://brave.com/) theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-brave

Then pass `themer-brave` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-brave -o gen

## Output

`themer-brave` will generate a `Themer Dark` or `Themer Light` directory (or both, depending on the color set you passed to `themer`) in your output path.

To install your generated theme:

1. Launch Brave and nagivate to `brave://extensions`.
2. Turn on the "Developer mode" toggle at the top.
3. Click the "Load unpacked extension..." button and choose your `Themer Dark` or `Themer Light` directory.

(To reset or remove your theme, visit `brave://settings` and click "Reset to Default" in the "Appearance" section.)

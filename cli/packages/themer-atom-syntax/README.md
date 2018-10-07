# themer-atom-syntax

An Atom syntax theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed (note that this package requires `themer@2.1.0` or newer.):

    npm install themer-atom-syntax

Then pass `themer-atom-syntax` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-atom-syntax -o gen

## Output

`themer-atom-syntax` will generate a `themer-dark-syntax/` or `themer-light-syntax/` directory (or both), depending on the color set you passed to themer, which will contain the files for a syntax theme Atom package.

To install the packages to Atom, use the `apm link` command:

    cd <themer output directory>/themer-atom-syntax/
    apm link themer-dark-syntax/
    apm link themer-light-syntax/

Finally, open/reload Atom and select "Themer Dark" or "Themer Light" in the list of available syntax themes.

# themer-vscode

A VS Code theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer^2.1.0` installed:

    npm install themer-vscode

Then pass `themer-vscode` as a `-t` (`--template`) argument to `themer`:

    themer -c my-colors.js -t themer-vscode -o gen

## Output

`themer-vscode` will generate a directory called `theme-themer-vscode`, which will contain the files for a VS Code theme(s).

To install your generated theme, symlink this directory to your local VS Code extensions directory:

    ln -s <full path to themer output directory>/themer-vscode/theme-themer-vscode ~/.vscode/extensions

Then reload or restart VS Code and find your theme package in the list of installed extensions.

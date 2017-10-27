# themer-vscode [![Travis](https://img.shields.io/travis/mjswensen/themer-vscode.svg)](https://travis-ci.org/mjswensen/themer-vscode)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-vscode'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-vscode.svg' />
</a>

A VS Code theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer^2.1.0` installed:

    npm install themer-vscode

Then pass `themer-vscode` as a `-t` (`--template`) argument to `themer`:

    themer -c my-colors.js -t themer-vscode -o gen

`themer-vscode` will generate a directory called `theme-themer-vscode`, which will contain the files for a VS Code theme(s).

To install your generated theme, symlink this directory to your local VS Code extensions directory:

    ln -s <full path to themer output directory>/themer-vscode/theme-themer-vscode ~/.vscode/extensions

Then reload or restart VS Code and find your theme package in the list of installed extensions.

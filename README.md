# themer-vim [![Travis](https://img.shields.io/travis/mjswensen/themer-vim.svg)](https://travis-ci.org/mjswensen/themer-vim)

A vim theme template for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-vim

Then pass `themer-vim` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-vim -o gen

`themer-vim` will generate a `ThemerVim.vim` file, which you should copy (or symlink) to `~/.vim/colors/`.

Finally, set the colorscheme in your .vimrc:

    colo ThemerVim

## Sponsor

[![Sponsor](https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-vim.svg)](https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-vim)

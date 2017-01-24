# themer-vim-lightline [![Travis](https://img.shields.io/travis/mjswensen/themer-vim-lightline.svg)](https://travis-ci.org/mjswensen/themer-vim-lightline)

A [lightline.vim](https://github.com/itchyny/lightline.vim) theme template for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    yarn add themer-vim-lightline

Then pass `themer-vim-lightline` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-vim-lightline -o gen

`themer-vim-lightline` will generate a `ThemerVimLightline.vim` file, which you should copy (or symlink) to `~/.vim/autoload/lightline/colorscheme/`.

Finally, set the lightline colorscheme in your `.vimrc` file:

    let g:lightline = { 'colorscheme': 'ThemerVimLightline' }

# themer-slack [![Travis](https://img.shields.io/travis/mjswensen/themer-slack.svg)](https://travis-ci.org/mjswensen/themer-slack)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-slack'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/hHKoUkX4tpsdAzjvSfNXFb22/mjswensen/themer-slack.svg' />
</a>

A Slack sidebar theme generator for [themer](https://github.com/mjswensen/themer).

## Installation & usage

Install this module wherever you have `themer` installed:

    npm install themer-slack

Then pass `themer-slack` as a `-t` (`--template`) arg to `themer`:

    themer -c my-colors.js -t themer-slack -o gen

`themer-slack` will generate a `themer-slack-dark.txt` or `themer-slack-light.txt` file (or both), depending on the color set you passed to themer. Simply copy the contents of this file and paste into the custom theme input in Slack's preferences.

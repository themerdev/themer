#!/bin/zsh

NAME="@themerdev/$1"

echo Generating $NAME...

PACKAGES_DIR="$(realpath "$(dirname $0:A)/../packages")"
PACKAGE="$PACKAGES_DIR/$1"

mkdir $PACKAGE

cat << EOF > $PACKAGE/.gitignore
node_modules
LICENSE.md
EOF

cat << EOF > $PACKAGE/.npmrc
tag-version-prefix "$NAME-v"
message "$NAME-v%s"
EOF

cat << EOF > $PACKAGE/package.json
{
  "name": "$NAME",
  "version": "1.0.0",
  "description": "TODO",
  "main": "lib/index.mjs",
  "engines": {
    "node": ">=18"
  },
  "scripts": {
    "prepublishOnly": "cp ../../../LICENSE.md ./",
    "test": "vitest"
  },
  "author": "mjswensen",
  "license": "MIT",
  "files": [
    "/lib/index.mjs"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/themerdev/themer.git"
  },
  "bugs": {
    "url": "https://github.com/themerdev/themer/issues"
  },
  "homepage": "https://github.com/themerdev/themer/tree/main/cli/packages/$1#readme",
  "peerDependencies": {
    "themer": "^4"
  },
  "keywords": [
    "themer",
    "$1"
  ]
}
EOF

cat << EOF > $PACKAGE/README.md
# $NAME

A TODO template for [themer](https://github.com/themerdev/themer).

## Installation & usage

Install this module wherever you have \`themer\` installed:

    npm install $NAME

Then pass \`$NAME\` as a \`-t\` (\`--template\`) arg to \`themer\`:

    themer -c my-colors.mjs -t $NAME -o gen

Installation instructions for the generated theme(s) will be included in \`<output dir>/README.md\`.
EOF

LIB="$PACKAGE/lib"
mkdir $LIB

cat << EOF > $LIB/index.js
const render = (colors, options) => {
  // TODO
}

const renderInstructions = paths => \`
TODO
\`;

module.exports = {
  render,
  renderInstructions,
};
EOF

cat << EOF > $LIB/index.spec.js
const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer $1 theme generator', () => {
  // TODO
});
EOF

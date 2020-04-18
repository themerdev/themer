#!/bin/zsh

NAME="themer-colors-$1"

echo Generating $NAME...

PACKAGES_DIR="$(realpath "$(dirname $0:A)/../packages")"
PACKAGE="$PACKAGES_DIR/$NAME"

mkdir $PACKAGE

cat << EOF > $PACKAGE/.gitignore
node_modules
LICENSE.md
EOF

cat << EOF > $PACKAGE/.yarnrc
version-tag-prefix $NAME-v
version-git-message $NAME-v%s
EOF

cat << EOF > $PACKAGE/package.json
{
  "name": "$NAME",
  "version": "1.0.0",
  "description": "TODO",
  "main": "lib/index.js",
  "engines": {
    "node": ">=6.11"
  },
  "author": "mjswensen",
  "license": "MIT",
  "files": [
    "/lib/index.js"
  ],
  "scripts": {
    "prepublishOnly": "cp ../../../LICENSE.md ./"
  },
  "repository": {
    "url": "git+ssh://git@github.com/mjswensen/themer.git",
    "type": "git"
  },
  "bugs": {
    "url": "https://github.com/mjswensen/themer/issues"
  },
  "homepage": "https://github.com/mjswensen/themer/tree/master/cli/packages/$NAME#readme",
  "peerDependencies": {
    "themer": "^3"
  },
  "keywords": [
    "themer",
    "colors",
    "colorset",
    "theme",
    "$1"
  ]
}
EOF

cat << EOF > $PACKAGE/README.md
# $NAME

A [themer](https://github.com/mjswensen/themer) color set based on TODO

## Installation & usage

Install this module wherever you have \`themer\` installed:

    npm install $NAME

Then pass \`$NAME\` as a \`-c\` (\`--colors\`) arg to \`themer\`:

    themer -c $NAME ...
EOF

LIB="$PACKAGE/lib"
mkdir $LIB

cat << EOF > $LIB/index.js
// TODO
module.exports.colors = {
  dark: {
    shade0: '',
    shade1: '',
    shade2: '',
    shade3: '',
    shade4: '',
    shade5: '',
    shade6: '',
    shade7: '',
    accent0: '',
    accent1: '',
    accent2: '',
    accent3: '',
    accent4: '',
    accent5: '',
    accent6: '',
    accent7: '',
  },
  light: {
    shade0: '',
    shade1: '',
    shade2: '',
    shade3: '',
    shade4: '',
    shade5: '',
    shade6: '',
    shade7: '',
    accent0: '',
    accent1: '',
    accent2: '',
    accent3: '',
    accent4: '',
    accent5: '',
    accent6: '',
    accent7: '',
  },
};
EOF

cat << EOF > $LIB/index.spec.js
const { colors } = require('./index');

describe('$NAME', () => {
  it('should define all required colors', () => {
    const prefixes = [
      'accent0',
      'accent1',
      'accent2',
      'accent3',
      'accent4',
      'accent5',
      'accent6',
      'accent7',
      'shade0',
      'shade7',
    ]
    prefixes.forEach(prefix => {
      expect(colors.dark[prefix]).toBeDefined();
      expect(colors.light[prefix]).toBeDefined();
    });
  });
});
EOF

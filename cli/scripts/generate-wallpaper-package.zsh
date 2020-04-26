#!/bin/zsh

DIR="wallpaper-$1"
NAME="@themer/$DIR"
ARG_PREFIX="themer-wallpaper-$1"

echo Generating $NAME...

PACKAGES_DIR="$(realpath "$(dirname $0:A)/../packages")"
PACKAGE="$PACKAGES_DIR/$DIR"

mkdir $PACKAGE

cat << EOF > $PACKAGE/.gitignore
node_modules
LICENSE.md
EOF

cat << EOF > $PACKAGE/.yarnrc
version-tag-prefix "$NAME-v"
version-git-message "$NAME-v%s"
EOF

cat << EOF > $PACKAGE/package.json
{
  "name": "$NAME",
  "version": "1.0.0",
  "description": "A wallpaper generator for themer.",
  "main": "lib/index.js",
  "engines": {
    "node": ">=8.11.4"
  },
  "scripts": {
    "prepublishOnly": "cp ../../../LICENSE.md ./"
  },
  "author": "mjswensen",
  "license": "MIT",
  "files": [
    "/lib/index.js"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mjswensen/themer.git"
  },
  "bugs": {
    "url": "https://github.com/mjswensen/themer/issues"
  },
  "homepage": "https://github.com/mjswensen/themer/tree/master/cli/packages/$DIR#readme",
  "dependencies": {
    "@themer/utils": "^1.0.0"
  },
  "peerDependencies": {
    "themer": "^3"
  },
  "keywords": [
    "themer",
    "wallpaper"
  ]
}
EOF

cat << EOF > $PACKAGE/README.md
# $NAME

A wallpaper template for [themer](https://github.com/mjswensen/themer).

TODO

## Installation & usage

Install this module wherever you have \`themer\` installed:

    npm install $NAME

Then pass \`$NAME\` as a \`-t\` (\`--template\`) arg to \`themer\`:

    themer -c my-colors.js -t $NAME -o gen

\`$NAME\` will generate SVG wallpapers to the output directory (\`gen/\` in this example). (You can then convert them to a bitmap format, if necessary, [using Chrome](https://umaar.com/dev-tips/156-element-screenshot/) or other tools.)

### Default resolutions

By default, \`$NAME\` will output wallpapers at the following sizes:

* 2880 by 1800 (desktop)
* 750 by 1334 (device)

### Custom resolutions

\`$NAME\` adds the following argument to \`themer\`:

    --$ARG_PREFIX-size

to which you would pass \`<width>x<height>\`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t $NAME --$ARG_PREFIX-size 1024x768 --$ARG_PREFIX-size 320x960 -o gen

EOF

LIB="$PACKAGE/lib"
mkdir $LIB

cat << EOF > $LIB/index.js
const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
} = require('@themer/utils');

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['$ARG_PREFIX-size']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(
      size => colorSets.map(colorSet => {
        // TODO
      }),
    ),
  );
}

module.exports = { render };
EOF

cat << EOF > $LIB/index.spec.js
const { render } = require('./index');
const { colors } = require('../../colors-default');

describe('themer "$1" wallpaper', () => {
  it('should render valid SVG', async () => {
    const files = await Promise.all(render(colors, {}));
    files.forEach(file => {
      expect(file.contents.toString('utf8')).toMatchSnapshot();
    });
  });
});
EOF

#!/bin/zsh

DIR="wallpaper-$1"
NAME="@themerdev/$DIR"
PREFIXED_NAME="themer-wallpaper-$1"
SIZE_ARG="$PREFIXED_NAME-size"

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
    "url": "git+https://github.com/themerdev/themer.git"
  },
  "bugs": {
    "url": "https://github.com/themerdev/themer/issues"
  },
  "homepage": "https://github.com/themerdev/themer/tree/main/cli/packages/$DIR#readme",
  "dependencies": {
    "@themerdev/utils": "^1.0.0",
    "canvas": "^2.6.1"
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

A wallpaper template for [themer](https://github.com/themerdev/themer).

TODO: Add preview images

## Installation & usage

Install this module wherever you have \`themer\` installed:

    npm install $NAME

Then pass \`$NAME\` as a \`-t\` (\`--template\`) arg to \`themer\`:

    themer -c my-colors.js -t $NAME -o gen

\`$NAME\` will generate PNG wallpapers to the output directory (\`gen/\` in this example).

### Default resolutions

By default, \`$NAME\` will output wallpapers at the following sizes:

- 2880 by 1800 (desktop)
- 750 by 1334 (device)

### Custom resolutions

\`$NAME\` adds the following argument to \`themer\`:

    --$SIZE_ARG

to which you would pass \`<width>x<height>\`. For example, to forego the default resolutions and generate two wallpapers, one 1024 by 768 and one 320 by 960:

    themer -c my-colors.js -t $NAME --$SIZE_ARG 1024x768 --$SIZE_ARG 320x960 -o gen
EOF

LIB="$PACKAGE/lib"
mkdir $LIB

cat << EOF > $LIB/index.js
const {
  getSizesFromOptOrDefault,
  deepFlatten,
  colorSets: getColorSets,
  listOutputFiles,
} = require('@themerdev/utils');
const { createCanvas } = require('canvas');

const render = (colors, options) => {
  try {
    var sizes = getSizesFromOptOrDefault(
      options['$SIZE_ARG']
    );
  } catch (e) {
    return [Promise.reject(e.message)];
  }

  const colorSets = getColorSets(colors);

  return deepFlatten(
    sizes.map(
      size => colorSets.map(async colorSet => {
        const canvas = createCanvas(size.w, size.h);
        const ctx = canvas.getContext('2d');

        // TODO

        return {
          name: \`$PREFIXED_NAME-\${colorSet.name}-\${size.w}x\${size.h}.png\`,
          contents: Buffer.from(
            canvas.toDataURL().replace('data:image/png;base64,', ''),
            'base64',
          ),
        };
      }),
    ),
  );
}

module.exports = {
  render,
  renderInstructions: listOutputFiles,
};
EOF

cat << EOF > $LIB/index.spec.js
const { render, renderInstructions } = require('./index');
const { colors } = require('../../colors-default');

describe('themer "$1" wallpaper', () => {
  it('should return 4 PNG files to write', async () => {
    const files = await Promise.all(render(colors, {}));
    expect(files.length).toBe(4);
    expect(files.filter(file => /\.png/.test(file.name)).length).toBe(4);
  });
  it('should list output files', async () => {
    const files = await Promise.all(render(colors, { '$SIZE_ARG': '1000x1000' }));
    const instructions = renderInstructions(files.map(({ name }) => name));
    expect(instructions).toMatchSnapshot();
  });
});
EOF

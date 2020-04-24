#!/bin/zsh
set -euo pipefail

OLD_NAME="themer-$1"
NEW_NAME="@themer/$1"

echo Renaming $OLD_NAME package to $NEW_NAME...

PACKAGES_DIR="$(realpath "$(dirname $0:A)/../packages")"
OLD_PACKAGE_DIR="$PACKAGES_DIR/$OLD_NAME"
NEW_PACKAGE_DIR="$PACKAGES_DIR/$1"

mv $OLD_PACKAGE_DIR $NEW_PACKAGE_DIR

# package.json -> fix name and homepage fields

sed -i '' -E 's|"name": "'$OLD_NAME'"|"name": "'$NEW_NAME'"|' $NEW_PACKAGE_DIR/package.json
sed -i '' -E 's|"homepage": "(.+)'$OLD_NAME'(.+)"|"homepage": "\1'$1'\2"|' $NEW_PACKAGE_DIR/package.json

# .yarnrc -> find/replace

sed -i '' -E "s|$OLD_NAME|$NEW_NAME|g" $NEW_PACKAGE_DIR/.yarnrc

# README.md -> find/replace

sed -i '' -E "s|$OLD_NAME|$NEW_NAME|g" $NEW_PACKAGE_DIR/README.md

# Misc

echo "TODO (manual tasks):"
echo "  - see if any tests need to be renamed"
echo "  - find other instances of $OLD_NAME in the repo"
echo "  - Review diffs and stage changes (next step is commit)"

read "?Ready to proceed? "

# Test - assumes pwd is cli/

yarn
yarn test

# Commit, publish, and tag

read "HUMAN_NAME?Human readable name: "
git commit -m "Scope $HUMAN_NAME package"

npm publish $NEW_PACKAGE_DIR --access public --otp $TOTP

read "VERSION?Version published: "
git tag "$NEW_NAME-v$VERSION"

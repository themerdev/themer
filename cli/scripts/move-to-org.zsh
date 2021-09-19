#!/bin/zsh

echo "Updating package and repository references..."

OLD_PACKAGE_SCOPE="@themer/"
NEW_PACKAGE_SCOPE="@themerdev/"

OLD_REPO_PATH="mjswensen/themer"
NEW_REPO_PATH="themerdev/themer"

PACKAGES_DIR="$(realpath "$(dirname $0:A)/../packages")"
PACKAGE="$PACKAGES_DIR/$1"

find \
  $PACKAGE \
  -type f \
  | xargs \
    --replace=__FILE__ \
    sed \
      --in-place \
      --expression="s|$OLD_PACKAGE_SCOPE|$NEW_PACKAGE_SCOPE|g" \
      --expression="s|$OLD_REPO_PATH|$NEW_REPO_PATH|g" \
      __FILE__

jq ".repository = .repository + {directory:\"cli/packages/$1\"}" \
  < $PACKAGE/package.json \
  > $PACKAGE/new.package.json
mv $PACKAGE/new.package.json $PACKAGE/package.json

echo "Staging changed files..."
git add -- $PACKAGE

echo "TODO: review staged diffs"
read "READY?Ready ('y' to proceed)? "
[[ $READY != 'y' ]] && exit 1

echo "Comitting..."
git commit -m "Move $1 to @themerdev"

read "OTP?npm OTP: "

echo "Publishing to npm..."
npm publish $PACKAGE --access public --otp $OTP

echo "Tagging commit..."
VERSION="$(jq --raw-output '.version' < $PACKAGE/package.json)"
git tag "$NEW_PACKAGE_SCOPE$1-v$VERSION"

echo "Deprecating old package..."
npm deprecate "$OLD_PACKAGE_SCOPE$1" "Moved to $NEW_PACKAGE_SCOPE$1" --otp $OTP

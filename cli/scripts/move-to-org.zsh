#!/bin/zsh

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

cat \
  $PACKAGE/package.json \
  | jq \
    ".repository = .repository + {directory:\"cli/packages/$1\"}" \
    > $PACKAGE/package.json

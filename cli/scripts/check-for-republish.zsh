#!/bin/zsh
set -euo pipefail

PACKAGES_DIR="$(realpath "$(dirname $0:A)/../packages")"
LIMIT=10

for PACKAGE in $PACKAGES_DIR/*; do
  echo "Inspecting $PACKAGE..."
  echo "Last $LIMIT commits in $PACKAGE:"
  echo
  git log --pretty=oneline --max-count=$LIMIT -- $PACKAGE
  echo
  read "COMMIT?Last published commit: "
  echo "Files changed in $PACKAGE since $COMMIT:"
  echo
  git diff --stat $COMMIT HEAD -- $PACKAGE
  echo
done

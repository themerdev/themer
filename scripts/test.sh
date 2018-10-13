#! /bin/bash
set -euo pipefail

cd cli
yarn run test:ci

cd ../web
yarn run test

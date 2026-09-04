#!/usr/bin/env bash

set -euo pipefail

echo "Installing my vibe coded Static Site Generator..."
cargo install --git https://github.com/thiezn/mdsite
# Do force if I haven't bumped the crate version again :D
# cargo install --git https://github.com/thiezn/mdsite --force

echo "Building the site. Github pages supports the docs/ folder out of the box. Make sure to commit to main after running this script."
echo "TODO: mdsite should probably clean the output directory automatically?"
rm -rf docs/
mdsite build --input website --output docs/

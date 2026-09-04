#!/usr/bin/env bash

set -euo pipefail

echo "Installing my vibe coded Static Site Generator..."
cargo install --git https://github.com/thiezn/mdsite

echo "Building the site. Github pages supports the docs/ folder out of the box. Make sure to commit to main after running this script."
mdsite build --input website --output docs/

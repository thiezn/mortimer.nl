#!/usr/bin/env bash

set -euo pipefail

mode="${1:-local}"

case "$mode" in
	local|preview|production|prod)
		;;
	*)
		echo "Usage: ./scripts/build.sh [local|production]"
		exit 1
		;;
esac

script_dir="$(cd -- "$(dirname -- "$0")" && pwd)"
project_root="$(cd -- "$script_dir/.." && pwd)"
website_dir="$project_root/website"
npm_cache_dir="$website_dir/.npm-cache"

mkdir -p "$npm_cache_dir"

cd "$website_dir"

echo "Updating npm when possible..."
if command -v npm >/dev/null 2>&1; then
	npm_prefix="$(npm prefix -g 2>/dev/null || true)"
	if [ -n "$npm_prefix" ] && [ -w "$npm_prefix" ]; then
		npm_config_cache="$npm_cache_dir" npm install --global npm@latest
	else
		echo "Skipping global npm update: $npm_prefix is not writable on this machine."
	fi
else
	echo "Skipping npm update: npm is not installed."
fi

needs_install="false"

if [ ! -d "node_modules" ]; then
	needs_install="true"
	install_reason="node_modules is missing"
elif [ ! -x "node_modules/.bin/svelte-kit" ]; then
	needs_install="true"
	install_reason="the local svelte-kit binary is missing"
fi

if [ "$needs_install" = "true" ]; then
	echo "Installing project dependencies because $install_reason..."
	if command -v npm >/dev/null 2>&1; then
		npm_config_cache="$npm_cache_dir" npm install
	elif command -v bun >/dev/null 2>&1; then
		bun install
	else
		echo "Error: neither npm nor bun is installed, so dependencies cannot be installed."
		exit 1
	fi
else
	echo "Project dependencies already installed."
fi

if [ ! -x "node_modules/.bin/svelte-kit" ]; then
	echo "Error: dependency bootstrap failed; node_modules/.bin/svelte-kit is still missing."
	exit 1
fi

echo "Running checks..."
bun run check

echo "Building site..."
bun run build

case "$mode" in
	production|prod)
		echo "Production build complete."
		exit 0
		;;
esac

echo "Starting preview at http://localhost:4173"
exec bun run preview --host localhost --port 4173

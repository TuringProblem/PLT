#!/usr/bin/env bash
# Render every module. Pass quality flags through, default to low/fast.
#   ./render-all.sh          # fast preview quality
#   ./render-all.sh -qh      # final quality
set -euo pipefail
cd "$(dirname "$0")"

# Modules to render. Scene class = folder name capitalized.
# (Plain indexed array so this works on macOS's bash 3.2, which has no `declare -A`.)
modules="variables conditionals functions loops"

flags="${*:--ql}"   # default to -ql if none given
for dir in $modules; do
  scene="$(tr '[:lower:]' '[:upper:]' <<<"${dir:0:1}")${dir:1}"
  echo ">>> rendering $dir ($scene)"
  uv run manim "$dir/video.py" "$scene" $flags
done

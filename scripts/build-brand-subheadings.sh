#!/usr/bin/env bash
set -euo pipefail

source_file="/workspace/scratch/73cfdda12aa7/generated/brand-phrases-v3/sheet-19.png"
output_dir="$(cd "$(dirname "$0")/.." && pwd)/public/brand-phrases"
labels=(
  "what-we-do"
  "breakdown-assistance"
  "meet-the-founder"
  "breakdown-membership"
  "mechanics-breakdown-recovery"
  "fault-found-not-guessed"
  "clear-pricing"
  "all-bikes-welcome"
  "shropshire-and-surrounding-areas"
  "motorcycle-mechanics-breakdown-and-recovery-transport"
  "diagnostic-capabilities"
  "service-plans"
)

width=$(identify -format '%w' "$source_file")
height=$(identify -format '%h' "$source_file")
for row in "${!labels[@]}"; do
  top=$((height * row / 12))
  bottom=$((height * (row + 1) / 12))
  row_height=$((bottom - top))
  convert "$source_file" -crop "${width}x${row_height}+0+${top}" +repage \
    -trim +repage -bordercolor none -border 12 "$output_dir/${labels[$row]}.png"
done

#!/usr/bin/env bash
set -euo pipefail

source_dir="/workspace/scratch/73cfdda12aa7/generated/brand-phrases-v2"
output_dir="public/brand-phrases"
mkdir -p "$output_dir"

phrases=(
"WHAT IT CAN DO|WHY IT HELPS|EQUIPMENT SPECIFICATION|DIAGNOSTIC PRICING|BATTERY REPLACEMENT|BRAKE SERVICE & REPAIR"
"ROADSIDE ASSISTANCE|MOTORCYCLE RECOVERY|PLANNED TRANSPORT|BROKEN DOWN?|WHERE WE STARTED|WHAT WE'RE BUILDING"
"WHERE WE'RE GOING|FOUNDED BY TOM MATTHEWS|TELL US ABOUT THE JOB|CURRENT SETTING|ESSENTIAL ONLY|FUTURE CONTROLS"
"MANAGE YOUR BROWSER|ABOUT US|WEBSITE STATUS|USING THIS WEBSITE|SERVICE CONTRACTS|PRICES AND PAYMENT"
"CONSUMER RIGHTS|INTELLECTUAL PROPERTY|LIABILITY|COMPLAINTS|LAW|BOOKINGS AND AVAILABILITY"
"PRICES AND DIAGNOSTICS|ESTIMATES AND ADDITIONAL WORK|PARTS|PAYMENT|CANCELLATION AND MISSED APPOINTMENTS|CONSUMER CANCELLATION RIGHTS"
"CUSTOMER RESPONSIBILITIES|SAFETY AND REFUSAL OF SERVICE|BREAKDOWN AND RECOVERY|TRANSPORT CONDITION RECORD|WORKMANSHIP AND WARRANTIES|EVENTS BEYOND OUR CONTROL"
"COMPLAINTS AND CANCELLATION CONTACT|MODEL CANCELLATION WORDING|MEMBERSHIP CONTRACT|PLANS AND BENEFITS|ACTIVATION AND EXISTING FAULTS|PAYMENTS AND RENEWAL"
"CANCELLATION BY THE MEMBER|COOLING-OFF RIGHTS|CANCELLATION BY OBSIDIAN|USING ASSISTANCE|ALLOWANCES AND FAIR USE|EXCLUSIONS"
"ROADSIDE REPAIR AND RECOVERY|MEMBER DISCOUNTS AND EVENTS|MOTORCYCLE CHANGES|OUR RESPONSIBILITY|WHAT COOKIES ARE|STRICTLY NECESSARY TECHNOLOGY"
"OPTIONAL CATEGORIES|THIRD-PARTY LINKS|BROWSER CONTROLS|CONTACT|LAWFUL BASES|WHERE INFORMATION COMES FROM"
"WHO WE SHARE IT WITH|INTERNATIONAL TRANSFERS|HOW LONG WE KEEP INFORMATION|SECURITY|CHILDREN|CHANGES"
"CURRENT USE|IF THIS CHANGES|WHO WE ARE|INFORMATION WE COLLECT|WHY WE USE IT|MARKETING"
"YOUR RIGHTS|IMPORTANT HEADLINE TERMS|COOKIE SETTINGS|TERMS & CONDITIONS|SERVICE TERMS & CONDITIONS|PRIVACY NOTICE"
"MOTORCYCLE MECHANICS · BREAKDOWN & RECOVERY · TRANSPORT|SHROPSHIRE & SURROUNDING AREAS|CONTACT OBSIDIAN|BREAKDOWN & RECOVERY|FAULT FINDING|ABOUT OBSIDIAN"
"LEGAL|MOBILE MOTORCYCLE MAINTENANCE|RIDER SUPPORT · RECOVERY · MEMBER BENEFITS|CONTACT OBSIDIAN|REGISTER YOUR INTEREST|WEBSITE UNDER CONSTRUCTION"
)

slugify(){ printf '%s' "$1" | tr '[:upper:]' '[:lower:]' | sed -E "s/[’']//g;s/&/ and /g;s/[^a-z0-9]+/-/g;s/^-|-$//g"; }

for sheet_number in $(seq -w 1 16); do
  source_file="$source_dir/sheet-$sheet_number.png"
  width=$(identify -format '%w' "$source_file")
  height=$(identify -format '%h' "$source_file")
  sheet_index=$((10#$sheet_number - 1))
  IFS='|' read -r -a labels <<< "${phrases[$sheet_index]}"
  for row in 0 1 2 3 4 5; do
    top=$((height * row / 6))
    bottom=$((height * (row + 1) / 6))
    row_height=$((bottom - top))
    name=$(slugify "${labels[$row]}")
    convert "$source_file" -crop "${width}x${row_height}+0+${top}" +repage \
      -colorspace gray -alpha copy -fill white -colorize 100 \
      -trim +repage -bordercolor none -border 12 "$output_dir/$name.png"
  done
done

convert "$source_dir/sheet-17.png" -colorspace gray -alpha copy -fill white -colorize 100 \
  -trim +repage -bordercolor none -border 12 "$output_dir/email-obsidian.png"

source_file="$source_dir/sheet-18.png"
width=$(identify -format '%w' "$source_file")
height=$(identify -format '%h' "$source_file")
thank_you_phrases=("THANK YOU" "WE'LL BE IN TOUCH" "MESSAGE SENT")
for row in 0 1 2; do
  top=$((height * row / 3))
  bottom=$((height * (row + 1) / 3))
  row_height=$((bottom - top))
  name=$(slugify "${thank_you_phrases[$row]}")
  convert "$source_file" -crop "${width}x${row_height}+0+${top}" +repage \
    -colorspace gray -alpha copy -fill white -colorize 100 \
    -trim +repage -bordercolor none -border 12 "$output_dir/$name.png"
done

#!/bin/bash

# Function to execute commands in the given folder
update_folder() {
  (
    cd "$1" || exit 1
    echo "Starting update in folder: $1"
    npm update
    yarn
    yarn dev
    echo "Completed update in folder: $1"
  ) > "$1/update.log" 2>&1 &
}

# If no arguments are provided, search for subfolders containing package.json
if [ "$#" -eq 0 ]; then
  find . -name 'node_modules' -prune -o -name 'package.json' -exec dirname {} \; | while read -r dir; do
    bash "$0" "$dir"
  done
  wait # Wait for all background jobs to finish
else
  # Argument provided, treat it as a folder and execute commands
  update_folder "$1"
fi

#!/bin/bash

if [ "$#" -eq 0 ]; then
  echo -n "Enter the problem name: "
  read name
else
  name=$1
fi

# Check if the directory already exists
if [ ! -d "./problems/$name" ]; then
  cp -r "./lib/scripts/~template" "./problems/$name"
fi

# Determine the default editor
editor="${EDITOR:-code}"

# Open the directory in the chosen editor
$editor "./problems/$name/sol.ts"
$editor "./problems/$name/in1"

#!/bin/bash

if [ "$#" -eq 0 ]; then
  echo -n "Enter the problem name: "
  read name
else
  name=$1
fi

cd "./problems/$name" || {
  echo "Directory not found!"
  exit 1
}

if [ -f "sol.js" ]; then
  bun run sol.js
elif [ -f "sol.ts" ]; then
  bun run sol.ts
fi

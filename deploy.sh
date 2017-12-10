#!/bin/bash
npm run clean
mkdir -p out && cd out
git init
git remote add blog git@github.com:9renpoto/9renpoto.github.io.git
git pull blog master
cd ..
find public -not -iwholename '*.git/*' | grep -v public/.git | xargs rm
npm run export
cd out
git add -A
git commit -am "Updated"
git push blog master

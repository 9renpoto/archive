#!/bin/bash
npm run clean
mkdir -p out
cd out
git init
git remote add blog git@github.com:9renpoto/9renpoto.github.io.git
git fetch --prune blog
git reset --hard blog/master
cd ..
find out -not -iwholename '*.git/*' | grep -v out/.git | xargs rm
npm run export
cd out
touch .nojekyll
git add -A
git commit -am "Updated"
git push blog master

#!/bin/bash

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"
git branch -m master main

git remote add origin git@github.com:lqinggang/myprotocolsbook.git
git push -f git@github.com:lqinggang/myprotocolsbook.git main:gh-pages

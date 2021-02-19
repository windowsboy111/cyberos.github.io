#!/bin/bash -e

# buildWebsite.sh - a bash script for building GitHub Pages for the CyberOS Website.
#                   Based on https://github.com/helloSystem/docs/blob/main/buildDocs.sh


## Install dependencies
apt-get update
apt-get -y install git rsync nodejs npm
npm install

## Variables
export SOURCE_DATE_EPOCH=$(git log -1 --pretty=%ct)
export docroot=$(mktemp -d)

## Build
npm run build

## Upload to GitHub Pages
git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"
rsync -av "./build/" "$docroot/"

pushd $docroot

git init
git remote add deploy "https://token:${G_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git checkout -b gh-pages

touch .nojekyll

cat > README.md <<EOF
# GitHub Pages data
There is nothing of interest for you to see here. Please move to the main branch.
EOF

git add .

msg="Build for commit ${GITHUB_SHA} made on `date -d"@${SOURCE_DATE_EPOCH}" --iso-8601=seconds` from ${GITHUB_REF} by ${GITHUB_ACTOR}"
git commit -am "$msg"

git push deploy gh-pages --force

popd
rm -rf $docroot

exit 0

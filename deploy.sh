#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

function doCompile {
  make
  sleep 1
  cp -a _book/. out/
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    doCompile
    exit 0
fi

# Clean out existing contents
# rm -rf out/**/*

# Run our compile script
doCompile
#cp deploy_key.enc ./out
ls -la


# deploy the site to s3
aws s3 sync ./out/ s3://old.dev.bandwidth.com/ap-docs --delete
# Clear the cloudfront cache
aws cloudfront create-invalidation --distribution-id E25F7XS938O4B2 --paths "/ap-docs/*"
#!/bin/bash
rm -rf node_modules/
rm package-lock.json
npm i --legacy-peer-deps
#npm i --force

# npm install html-webpack-plugin --save-dev --legacy-peer-deps
# npm install webpack-auto-inject-version --save-dev --legacy-peer-deps

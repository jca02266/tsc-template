npm init -y
npm i --save-dev typescript
npx tsc --version
npx tsc --init
npm i --save-dev webpack webpack-cli ts-loader
npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i --save-dev prettier
npm i --save-dev eslint-config-prettier

# npm i --save-dev webpack-dev-server
# perl -p -i.bak -e 's("scripts": \{)("scripts": {
#     "start": "webpack-dev-server",
#     "build": "webpack",
#     "watch": "webpack -w",
#     "lint": "eslint src -c .eslintrc.js --ext ts,tsx; exit 0",)' package.json

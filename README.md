# @hideo54/eslint-config

[![npm version](https://badge.fury.io/js/%40hideo54%2Feslint-config.svg)](https://badge.fury.io/js/%40hideo54%2Feslint-config)
[![Release npm package](https://github.com/hideo54/eslint-config/actions/workflows/release.yml/badge.svg)](https://github.com/hideo54/eslint-config/actions/workflows/release.yml)

[Available on npm!](https://www.npmjs.com/package/@hideo54/eslint-config)

## How to use

Run `npm i -D @hideo54/eslint-config` and extends your .eslintrc.json etc. like:

```
{
    "extends": "@hideo54"
}
```

## How to publish (note for hideo54)

1. `npm version v2.5.252`
1. `git push --tags`
1. Then the GitHub Actions workflow runs and publishes the package instead of you

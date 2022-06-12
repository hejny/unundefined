# 👻 Unundefined

<!--Badges-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/800-badges/badges.ts so every manual change will be overwritten.-->

[![License of 👻 Unundefined](https://img.shields.io/github/license/hejny/unundefined.svg?style=flat)](https://github.com/hejny/unundefined/blob/main/LICENSE)
[![NPM Version of 👻 Unundefined](https://badge.fury.io/js/unundefined.svg)](https://www.npmjs.com/package/unundefined)
[![Quality of package 👻 Unundefined](https://packagequality.com/shield/unundefined.svg)](https://packagequality.com/#?package=unundefined)
[![lint](https://github.com/hejny/unundefined/actions/workflows/lint.yml/badge.svg)](https://github.com/hejny/unundefined/actions/workflows/lint.yml)
[![test](https://github.com/hejny/unundefined/actions/workflows/test.yml/badge.svg)](https://github.com/hejny/unundefined/actions/workflows/test.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/hejny/unundefined/badge.svg)](https://snyk.io/test/github/hejny/unundefined)
[![Issues](https://img.shields.io/github/issues/hejny/unundefined.svg?style=flat)](https://github.com/hejny/unundefined/issues)

<!--/Badges-->

Proxies an object so that non of the properties will be undefined.

## Usage

```bash
npm i unundefined
```

```typescript
import { unundefined } from 'unundefined';

const fakeWindow = unundefined(window);

console.log(fakeWindow.contains.everything.you.want);
console.log(fakeWindow.alert /* ... but also existing stuff as usual */);
```

_See more examples in [simple tests](./src/unundefined.test.ts)._

# 👻 Unundefined

<!--Badges-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/800-badges/badges.ts so every manual change will be overwritten.-->


[![License of 👻 Unundefined](https://img.shields.io/github/license/hejny/unundefined.svg?style=flat)](https://github.com/hejny/unundefined/blob/main/LICENSE)
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



<!--Contributing-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/810-contributing/contributing.ts so every manual change will be overwritten.-->

## 🖋️ Contributing

I am open to pull requests, feedback, and suggestions. Or if you like this utility, you can [☕ buy me a coffee](https://www.buymeacoffee.com/hejny) or [donate via cryptocurrencies](https://github.com/hejny/hejny/blob/main/documents/crypto.md).

You can also ⭐ star the unundefined package, [follow me on GitHub](https://github.com/hejny) or [various other social networks](https://www.pavolhejny.com/contact/).

<!--/Contributing-->


<!--Partners-->
<!--⚠️WARNING: This section was generated by https://github.com/hejny/batch-project-editor/blob/main/src/workflows/820-partners/partners.ts so every manual change will be overwritten.-->

## ✨ Partners


<a href="https://collboard.com/">
<img src="https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.12.1/logo-small.png" alt="Collboard logo" width="50"  />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://czech.events/">
<img src="https://czech.events/design/logos/czech.events.transparent-logo.png" alt="Czech.events logo" width="50"  />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://sigmastamp.ml/">
<img src="https://www.sigmastamp.ml/sigmastamp-logo.white.svg" alt="SigmaStamp logo" width="50"  />
</a>


[Become a partner](https://www.pavolhejny.com/contact/)

<!--/Partners-->
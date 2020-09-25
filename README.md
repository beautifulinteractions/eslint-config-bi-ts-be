# eslint-config-bi-ts-be

## requirements

In `package.json`:

```js
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.2.0",
    "eslint": "^7.9.0",
    "eslint-config-bi-ts-be": "github:beautifulinteractions/eslint-config-bi-ts-be",
    "eslint-plugin-import": "^2.22.0",
    "typescript": "^4.0.3"
  }
```

In `.eslintrc`:

```
{
  "extends": [
    "bi-ts-be"
  ],
  "parserOptions": {
    "sourceType": "script",
    "ecmaFeatures": {
      "modules": false,
      "impliedStrict": false
    },
    "project": "tsconfig.json"
  },
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "rules": {
  }
}
```
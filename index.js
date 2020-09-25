module.exports = {
  extends: ['eslint-config-bi-es-be', './lib/shared.js'].map(require.resolve),
};

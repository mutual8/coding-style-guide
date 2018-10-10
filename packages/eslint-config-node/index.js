module.exports = {
  extends: ['eslint-config-airbnb-base'].map(require.resolve),
  env: { browser: false, node: true },
  rules: { semi: ['error', 'never'] },
}

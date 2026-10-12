const pkg = require('@salesforce/eslint-config-lwc');

const config = Array.isArray(pkg) ? pkg : pkg.configs?.recommended || [pkg];

module.exports = [
  ...config,
  {
    files: ['**/lwc/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
];

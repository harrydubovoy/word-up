module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': ['error',  { 'devDependencies': true }],
    'quotes': [2, 'single'],
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

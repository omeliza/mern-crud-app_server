module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier', 'eslint:recommended'],
  plugins: ['prettier', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-debugger': 0,
    'no-console': 'off',
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-var': 'error',
    indent: ['error', 2],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'require-await': 'error',
    'no-return-await': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'warn',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
  },
};

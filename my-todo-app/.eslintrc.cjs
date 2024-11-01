module.exports = {
  env: {
    'browser': true,
    'es2021': true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  overrides: [
    {
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint'],
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        '@typescript-eslint/default-param-last': 'off',
        'react/prop-types': 'off',
        'no-empty-pattern': 'off',
        'import/no-extraneous-dependencies': 'off',
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    'no-param-reassign': ['error', { 'props': false }],
    'comma-dangle': ['error', 'only-multiline'],
    'default-case': 'off',
    'global-require': 'off',
    "react/jsx-no-useless-fragment": "off",
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'new-cap': ['error', {
      'newIsCap': true,
      'capIsNew': false,
    }],
    'import/no-dynamic-require': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/anchor-has-content': ['off'],
    'jsx-a11y/label-has-for': ['off'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-curly-spacing': ['error', 'always', {'allowMultiline': true}],
    'react/forbid-prop-types': ['error', {'forbid': ['any']}],
    'react/sort-comp': ['off'],
    'react/no-array-index-key': 'off',
    'max-len': ['off'],
    'lines-between-class-members': 'off',
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-promise-reject-errors': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'camelcase': 'off',
    'prefer-destructuring': 'off',
    'no-restricted-globals': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-closing-tag-location': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/jsx-curly-newline': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/default-props-match-prop-types': 'off',
    'padded-blocks': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'react/no-did-update-set-state': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-underscore-dangle': 'off',
    'newline-before-return': 'error',
    'no-empty': ['error', {'allowEmptyCatch': true}],
    'react/display-name': 'off',
    'react/no-unknown-property': [2, {'ignore': ['download']}],
    '@typescript-eslint/no-this-alias': 'off',
    'react/function-component-definition': ["off"],
    'react/react-in-jsx-scope': 0,
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
  },
};

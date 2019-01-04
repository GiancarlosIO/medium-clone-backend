module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          "node": "current",
        }
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'import-graphql',
    ],
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ]
  ],
};

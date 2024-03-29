module.exports = {
  presets: [
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'mint-ui',
        style: true
      }
    ],
    "@babel/plugin-syntax-dynamic-import"
  ]
}
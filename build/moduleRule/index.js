module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.t|jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ]
          }
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
      },
      {
        test: /\.svg$/i,
        use: 'file-loader',
      },
    ]
  }
}

const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: (chunkData) => {
      return chunkData.chunk.name === 'main' ?
            'main.js' :
            '[contentHash].worker.js';
    },
    path: path.resolve(__dirname, 'docs/count-votes')
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\-worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {name: 'v1.0.0.a1-tab-worker.js'},
        },
      },
    ],
  },
};


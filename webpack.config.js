var webpack = require('webpack');
module.exports = {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      "./index.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']}
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};

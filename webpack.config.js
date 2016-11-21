const webpack = require('webpack');

new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('DEV')
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: './assets/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
};

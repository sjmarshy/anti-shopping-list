const webpack = require('webpack'); // eslint-disable-line

new webpack.DefinePlugin({ // eslint-disable-line
    'process.env.NODE_ENV': JSON.stringify('DEV'),
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: './assets/js',
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
        ],
    },
};

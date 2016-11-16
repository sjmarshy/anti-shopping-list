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

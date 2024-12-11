const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/renderer.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // For JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // For CSS files
                use: ['style-loader', 'css-loader'], // Loaders to handle CSS
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
              type: 'asset/resource', // Use Webpack 5 asset module
          },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions
    },
};

var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'assets');


module.exports = {
    entry: [
        './app/index.js',
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8081'  // WebpackDevServer host and port
    ],
    output: {
        path: buildPath,
        filename: '[name].js',
        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: 'http://localhost:8081/assets/'
    },

    extensions: [
        '',
        '.jsx', '.js',
        '.json',
        '.html',
        '.css', '.styl', '.scss', '.sass'
    ],

    module: {
        loaders: [
            // Compile es6 to js.
            {
                test: /app\/.*\.jsx?$/,
                loaders: [
                    'react-hot',
                    'babel-loader'
                ]
            },

            { test: /app\/.*\.json$/, loader: 'json-loader' },

            // Styles
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.s(a|c)ss$/, loader: 'style!css?localIdentName=[path][name]---[local]---[hash:base64:5]!postcss!sass' },

            // Fonts
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }

        ],

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    },

    postcss: [
        require('postcss-local-scope'),
        require('autoprefixer-core')
    ],

    devtool: 'source-map'
};

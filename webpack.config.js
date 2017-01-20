var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var excludeFolders = /(node_modules|bower_components)/;

module.exports = {
    context: __dirname + '/assets',
    entry: './scripts/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['modules', 'node_modules', 'public/bower_components']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: excludeFolders
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader',
                exclude: excludeFolders
            },
            {
				        test: /\.(eot|woff|ttf|svg|png|jpg)$/,
				        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			      },
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.ProvidePlugin({
          $: "jquery/dist/jquery.min.js",
          jQuery: "jquery/dist/jquery.min.js",
          "window.jQuery": "jquery/dist/jquery.min.js"
        })
    ]
};

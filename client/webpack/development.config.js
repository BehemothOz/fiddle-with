const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../build'),
        compress: true,
        port: 4000,
        historyApiFallback: true,
        // open: true,
        hot: true
    }
})
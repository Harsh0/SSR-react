const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we're building a bundle
    //for NODEJS
    target: 'node',

    //tell about root file
    entry: './src/index.js',

    //Tell where to put output files
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]

}

module.exports = merge(baseConfig, config)
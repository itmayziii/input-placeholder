const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "input-placeholder-handler": "./src/input-placeholder-handler.ts",
        "input-placeholder-handler.min": "./src/input-placeholder-handler.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'inputPlaceholderHandler'
    },
    externals: {
        jquery: {

        }
    },
    plugins: [
        new UglifyJSPlugin({
            minimize: true,
            include: /\.min\.js$/
        })
    ]
};
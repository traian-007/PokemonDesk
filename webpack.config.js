const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']  //extention with we can work
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.js'),//entry point
    output: {                                     //where we will put fails
        path: path.resolve(__dirname, 'dist'), //path
        filename: 'main.js',                  //name of bundle
    },
    module: {       //loader for transp. jsx,tsx in js.....default webpack can work just with js and json files
        rules: [
            {
                test: /\.[tj]sx?$/,     //extension(jsx,ts,sx)
                use: ['ts-loader']       //loader
            },
            {
                test: /\.(s*)css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                auto: /\.modules\.\w+$/i,
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [                       // copy files...in dist copy index.html
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {                //server localhost webpack-dev-server
        port: 3000,
        open: true,
        hot: true,
    },
    devtool: 'source-map'     //in devtool transpil es5 in simple code
}
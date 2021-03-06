const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], //extention with we can work
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'), //entry point
  output: {
    //where we will put fails
    path: path.resolve(__dirname, 'dist'), //path
    filename: 'main.js', //name of bundle
  },
  // watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  module: {
    //loader for transp. jsx,tsx in js.....default webpack can work just with js and json files
    rules: [
      {
        test: /\.[tj]sx?$/, //extension(jsx,ts,sx)
        exclude: [/node_modules/, path.resolve(__dirname, 'src/server/server.js')],
        use: ['ts-loader'], //loader
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?modules',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ['url-loader'],
      },
    ],
  },
  plugins: [
    // copy files...in dist copy index.html
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    //server localhost webpack-dev-server
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'source-map', //in devtool transpil es5 in simple code
};

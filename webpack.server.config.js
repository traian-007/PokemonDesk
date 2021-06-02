const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], //extention with we can work
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/server/server.js'), //entry point
  output: {
    //where we will put fails
    path: path.resolve(__dirname, 'dist'), //path
    filename: 'server.js', //name of bundle
  },
  externals: [nodeExternals()],
  module: {
    //loader for transp. jsx,tsx in js.....default webpack can work just with js and json files
    rules: [
      {
        test: /\.[tj]sx?$/, //extension(jsx,ts,sx)
        use: ['ts-loader'], //loader
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // 'css-modules-typescript-loader?modules',
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
};

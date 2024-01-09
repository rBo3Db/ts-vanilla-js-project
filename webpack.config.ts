import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import  MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import { Configuration } from 'webpack';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: Configuration & Record<string, any> = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
  },
  target: ['web', 'es2022'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    liveReload: true,
    compress: true,
    port: 3000,
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== 'production'
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    },
        // {
        //   test: /\.css$/i,
        //   use: ["style-loader", "css-loader"],
        // },
      {
        test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader?name=assets/fonts/[name].[ext]',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, 'src', 'assets'),
          to: './assets',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: ".[name].css",
      chunkFilename: "[id].css"
    }),
  ],
};

export default config;
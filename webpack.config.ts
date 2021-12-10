import type { Configuration } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { getIfUtils, removeEmpty } from 'webpack-config-utils'
import ESLintPlugin from 'eslint-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const { ifProduction } = getIfUtils(process.env.NODE_ENV ?? 'development')

const config: Configuration = {
  mode: ifProduction('production', 'development'),
  output: ifProduction(
    {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      publicPath: '',
    },
    {
      publicPath: '/',
    },
  ),
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: removeEmpty([
    ifProduction(new CleanWebpackPlugin()),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/static-assets',
          to: 'assets',
        },
      ],
    }),
  ]),
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    client: {
      overlay: false,
    }
  },
}

export default config
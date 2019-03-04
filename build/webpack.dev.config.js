const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: {
    app: "./src/app.js",
  },
  output: {
    publicPath: '',
    filename: "js/[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  // webpack-dev-server 运行时会读取这里的配置
  devServer: {
    port: 3000,
    contentBase: './dist',
    // proxy
    host: '0.0.0.0'
  },
  devtool: 'source-map',
  resolve: {
    // extensions: ['.js', '.ts', '.tsx', '.json'] // less css
    extensions: ['.js', '.jsx', '.json'], // less css
    alias: {
      '@': resolve('src'),
      '-': resolve('static')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-pxtorem')({
                rootValue: 37.5,
                propWhiteList: [],
                minPixelValue: 2,
              })
            ]
          }
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          // 加载顺序有影响，这个需要放在less-loader之前，不然一些 less 语法会报错
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-pxtorem')({
                rootValue: 37.5,
                propWhiteList: [],
                minPixelValue: 2,
              })
            ]
          }
        }, {
          loader: "less-loader", options: {
            paths: [
              path.resolve(__dirname, "src")
            ]
          }
        }]
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        exclude: /^node_modules$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /^node_modules$/,
        loader: 'url-loader?limit=10000&name=/images/[hash:8].[name].[ext]',
        //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
      },
      {
        test: /\.jsx?$/,
        exclude: /^node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /^node_modules$/,
      //   loader: "awesome-typescript-loader"
      // }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, ''), // 根目录，默认为当前目录
      exclude: [],
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: false, // 样式注入html
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new CopyWebpackPlugin([
      {
        from: 'static',
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: 'public'
      }
    ])
  ]
};

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IgnorePlugin = webpack.IgnorePlugin;

module.exports={
	entry: {
		"goodreadssearch": './src/Entry.js',
		"vendor": ["axios", "react", "react-redux","react-router-dom","lodash","moment", "classnames", "combine-section-reducers", "react-router-redux", "raw-loader",
					"redux", "redux-logger", "redux-thunk", "history"

			]
		},

	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].js?[hash]",
		publicPath: '/'
		},
	module: {
		rules: [
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            {
                test: /src(\\?\/).*.(svg)$/,
                loader: 'raw-loader'
            },
			{
				test: /\.(sass)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'sass-loader'
				})
			},
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
		]
	},
	optimization: {
		namedModules: true,
		splitChunks: {
			name: 'vendor',
			minChunks: 2
		},
		noEmitOnErrors: true
	},
	
	plugins: [
		new ExtractTextPlugin("[name].css?[hash]"),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new HtmlWebpackPlugin({
			filename: 'goodreadssearch.html',
			template: './src/index.html',
			chunks: ["goodreadssearch", "vendor"],
			inject: false
		}),
		new CopyWebpackPlugin([
			{ from: './src/Staticfile', to:'./' },
			{ from: './src/static-index.html', to:'./index.html' }
		])
	],
	resolveLoader: {
		modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
	},
	resolve: {
		modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
		extensions: ['.js','.jsx','.scss', '.css'],
		alias: {
			'react': path.join(__dirname, '../node_modules', 'react')
		}
	}
};
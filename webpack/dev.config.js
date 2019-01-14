const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require('./base.config');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const SourceMapDevToolPlugin = webpack.SourceMapDevToolPlugin;

module.exports= merge(base, {
	mode: 'development',
	plugins: [ 
		new HotModuleReplacementPlugin(),
		new SourceMapDevToolPlugin({
			test: /\.js/,
			filename: '[file].map',
			columns: true
		})
	],
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: "./dist/",
		port: 8001,
		inline: true,
		host: '0.0.0.0',
		hotOnly: true,
		historyApiFallback: true,
		proxy: {
			'/goodreads-service/*' : {
				target: 'http://localhost:8080',
				secure: false
			}
		},
		stats: {
			hash: true,
			version: true,
			modules: true,
			assets: true,
			children: false,
			errorDetails: true,
			exclude: ['node_modules']
		}
	}
});	
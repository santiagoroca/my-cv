var webpack = require('webpack');

module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', './js/entry.js'],
	},

	output: {
		path: __dirname + './public/built',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/built/'
	},

	devServer: {
		contentBase: './public',
		publicPath: 'http://localhost:8080/built/'
	},

	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {presets: ['react']}
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		},{
			test: /\.(woff|ttf)$/,
			loader: 'url-loader'
		},{
	            test: /\.(png)$/,
        	    loader: 'url-loader'
	        },{
			test: /\.svg$/,
			loader: 'react-svg?es5=1'
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFedetationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8081,
	},
	plugins: [
		new ModuleFedetationPlugin({
			name: "products",
			filename: "remoteEntry.js",
			exposes: {
				"./ProductsIndex": "./src/index",
			},
			shared: {
				faker: {
					singleton: true,
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

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
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

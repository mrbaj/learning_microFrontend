const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8082,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "cart",
			filename: "remoteEntry.js",
			exposes: {
				"./showCart": "./src/index",
			},
			shared: ["faker"], //this will work for container, but not for standalone app
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

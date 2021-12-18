const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFedetationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8080,
	},
	plugins: [
		new ModuleFedetationPlugin({
			name: "container",
			remotes: {
				products: "products@http://localhost:8081/remoteEntry.js",
				cart: "cart@http://localhost:8082/remoteEntry.js",
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};

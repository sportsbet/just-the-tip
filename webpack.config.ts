import * as HtmlWebpackPlugin from "html-webpack-plugin"
const CleanObsoleteChunks = require("webpack-clean-obsolete-chunks")

const config = {
	stats: "errors-only",
	entry: {
		app: "./src/web_index.tsx"
	},
	output: {
		path: __dirname + "/build/web",
		filename: "[name]-[hash].js",
		devtoolModuleFilenameTemplate: "[absoluteResourcePath]",
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "web/index.html",
			filename: "index.html"
		}),
		new CleanObsoleteChunks()
	],
	resolve: {
		extensions: [".js", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
					configFile: "tsconfig.web.json"
				}
			},
			{
				test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
				loader: "file-loader",
				options: {
					name: "assets/[name].[ext]"
				}
			}
		]
	},
	devtool: "source-map"
}

export default config
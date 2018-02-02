const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    //target:"electron-renderer", // change target for build web version ** Thalles batista
    entry: "./src/hello.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/proj/index.html' },
                { from: /./, to: '/proj/404.html' }, // fazer
            ],
        },
        contentBase: './',
        hot: true
        // https: false
    }, 
 
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            
            // BABEL CONFIG
            {
                test: /\.js$/, 
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["es6", "react", "dom"]
                  }
                }
              },
        ],
        
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        // "path": "require('path')"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.SourceMapDevToolPlugin({ exclude: /node_modules/ }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
        }),
        new CopyWebpackPlugin([{
            from: 'node_modules/monaco-editor/min/vs',
            to: 'vs',
        }]),
    ],

    
    node: {
        fs: 'empty'
    }
};
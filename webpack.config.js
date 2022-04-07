const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.m?css$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};
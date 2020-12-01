
module.exports = {
    // defining entry point
    entry: "./assets/script1.js",

    // defining an output file
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            },
        }
        ]
    },
    mode: "none"
}
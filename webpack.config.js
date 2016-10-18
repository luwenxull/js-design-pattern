module.exports = {
    entry: {
        app:'./app.ts'
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}
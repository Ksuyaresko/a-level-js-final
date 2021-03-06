const path = require ( 'path' )

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve ( __dirname, 'dist' ),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
}
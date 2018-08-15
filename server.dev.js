const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require( 'webpack-hot-middleware');

const app = express();
const port = require('./config.js').devPort;
const wpConfig = require('./webpack.config.dev.js');
const compiler = webpack(wpConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: wpConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.get('/*', (req, res) => {
    res.send('index');
});

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});
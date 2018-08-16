const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require( 'webpack-hot-middleware');

const app = express();
const port = require('./config.js').devPort;
const wpConfig = require('./webpack.config.dev.js');
const compiler = webpack(wpConfig);

const database = require('./api/database');
const apiRouter = require('./api/router');

database.connect();

app.use(webpackDevMiddleware(compiler, {
    publicPath: wpConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use('/api', apiRouter);

/*app.get('*', function(req, res) {
    res.sendfile('./dist/index.html');
});*/

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});
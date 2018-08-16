const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const database = require('./api/database');
const apiRouter = require('./api/router');
const port = require('./config').port;

database.connect();

app.use(
    express.static(__dirname + '/dist'),
    bodyParser()
);

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    // res.sendFile('index.html', { root: __dirname + '/dist/' });
    res.send('index');
});

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});
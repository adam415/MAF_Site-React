const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = require('./config').port;

app.use(
    express.static(__dirname + '/dist'),
    bodyParser()
);

app.get('/', (req, res) => {
    res.send('index');
});

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`);
});
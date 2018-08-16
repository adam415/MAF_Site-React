const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const database = require('./database');
// const viewRoot = './client/view';

router.use(bodyParser.json());

//router.get('/', (req, res) => res.sendFile('HomePage.html', { root: viewRoot }));

//router.get('/form', (req, res) => res.sendFile('FormPage.html', { root: viewRoot }));

//router.get('/table', (req, res) => res.sendFile('TablePage.html', { root: viewRoot }));

//router.get('/about', (req, res) => res.sendFile('AboutPage.html', { root: viewRoot }));

router.get('/users', (req, res) => database.queryUsers(res).then(data => res.send(data), reason => res.send(reason)));

router.post('/users', (req, res) => {
    console.log(`Got new query. Name: ${req.body.userName} Age: ${req.body.userAge}`);
    database.saveUser(req.body.userName, req.body.userAge).then(data => res.sendStatus(200), reason => res.sendStatus(500));
});

router.delete('/users/:id', (req, res) => {
    database.deleteUser(req.params.id).then(data => res.sendStatus(200), reason => res.sendStatus(500));
});

router.put('/users/:id', (req, res) => {
    database.replaceUser(req.params.id, req.body.userName, req.body.userAge).then(data => res.sendStatus(200), reason => res.sendStatus(500));
});

router.get('/users/:id', (req, res) => {
    database.findUserById(req.params.id).then(data => res.send(data), reason => res.send(reason));
});

module.exports = router;
const express = require('express');
require('ansicolor').nice;
const app = express();
const users = require('./endpoints/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const inquiries = [];
const session = {};
const FAILED_TO_LOGIN = 3;
const UNAUTHENTICATED = 4;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/sms', (req, res) => {
    inquiries.push(req.body);
    res.send({ code: 200 });
});

app.get('/inquiries', (req, res) => {
    if (req.body.token && req.body.token === session.hash) {
        res.send({ inquiries });
    } else {
        res.send({
            code: UNAUTHENTICATED,
            message: 'Unauthenticated: Please login.',
        });
    }
});

// Users
app.get('/users', users.users);
app.post('/signup', users.signup);
app.post('/login', (req, res) => {
    const result = users.login(req, res);
    if (result.err === false) {
        session.hash = result.token;
        res.send({ code: 200, token: result.token });
    } else {
        res.send({ code: FAILED_TO_LOGIN, message: 'Error logging in.' });
    }
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

module.exports = app;

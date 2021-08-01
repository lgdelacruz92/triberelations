const bcrypt = require('bcrypt');
const saltRounds = 10;
const { v4: uuidv4 } = require('uuid');

const SUCCESS = 0;
const EMAIL_ALREADY_IN_USE = 1;

const users = []
let userId = 1;

exports.users = function(req, res) {
    res.send(users)
}

exports.signup = function(req, res) {
    if (users.find(user => user.email === req.body.email) !== undefined) {
        res.send({ "code": EMAIL_ALREADY_IN_USE, "message": "Email already in use." });
    } else {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            users.push({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: hash,
                userId: userId
            });
            userId++;
        });
        res.send({ "code": SUCCESS, "message": "success" });
    }
}

exports.login = function(req, res) {
    user = users.find(user => user.email === req.body.email);
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            return {
                token: uuidv4(),
                err: false
            }
        } else {
            return { token: null, err: true}
        }
    }
    else {
        return { token: null, err: true };
    }
}


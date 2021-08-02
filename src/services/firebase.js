var admin = require('firebase-admin');

var serviceAccount = require('../../firebase-secret.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

exports.firebase = admin;

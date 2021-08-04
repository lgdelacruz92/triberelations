/* global globalThis */
const functions = require('firebase-functions');
const firebase = require('firebase-admin');
require('ansicolor').nice;

const serviceAccount = require('../../firebase-secret.json');

exports.firebaseInstance = () => {
    if (firebase.apps.length === 0) {
        globalThis.firebaseApp = firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
        return globalThis.firebaseApp;
    } else {
        return globalThis.firebaseApp;
    }
};

exports.functions = functions;

/* global globalThis */
const functions = require('firebase-functions');
const firebase = require('firebase-admin');
require('ansicolor').nice;

const firebaseConfig = functions.config().firebase;

exports.firebaseInstance = () => {
    if (firebase.apps.length === 0) {
        globalThis.firebaseApp = firebase.initializeApp(firebaseConfig);
        return globalThis.firebaseApp;
    } else {
        return globalThis.firebaseApp;
    }
};

exports.functions = functions;

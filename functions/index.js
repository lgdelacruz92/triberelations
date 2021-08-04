const functions = require('firebase-functions');
const firebase = require('firebase-admin');

const firebaseConfig = functions.config().firebase;
firebase.initializeApp(firebaseConfig);

const graphql = require('./services/graphql/graphql');
exports.graphql = functions.https.onRequest(graphql);

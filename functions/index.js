const { functions, firebaseInstance } = require('./services/firebase/firebase');
firebaseInstance();

const graphql = require('./services/graphql/graphql');
exports.graphql = functions.https.onRequest(graphql);

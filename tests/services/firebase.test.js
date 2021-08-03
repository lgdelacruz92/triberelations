/*global test*/
const firebase = require('../src/services/firebase');

const db = firebase.firebase.firestore();
db.collection('users').doc('12341').set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
});

test('Test adding user', async () => {});

import firebase from 'firebase';

export default function FirebaseInstance() {
    if (firebase.apps.length === 0) {
        // Configure Firebase.
        const config = {
            apiKey: 'AIzaSyASs_Hf1R0pib5FErgK-4nTGYWnxvTU5JY',
            authDomain: 'triberelations-94f8c.firebaseapp.com',
            projectId: 'triberelations-94f8c',
            storageBucket: 'triberelations-94f8c.appspot.com',
            messagingSenderId: '552371995257',
            appId: '1:552371995257:web:b64373a66e4064fcc5caa8',
            measurementId: 'G-54KEQ9T435',
        };
        globalThis.firebase = firebase.initializeApp(config);
    }
    return globalThis.firebase;
}


const { firebaseInstance } = require('./firebase');

exports.getInquiries = async () => {
    const snapshot = await firebaseInstance()
        .firestore()
        .collection('inquiries')
        .get();
    const inquiries = [];
    snapshot.forEach((s) => {
        inquiries.push(s.data());
    });
    return inquiries;
};

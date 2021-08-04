const { getInquiries } = require('../firebase/inquiries.firebase');

exports.inquiries = () => {
    return getInquiries();
};

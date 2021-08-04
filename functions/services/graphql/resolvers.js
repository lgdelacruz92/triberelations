const { inquiries } = require('./inquiries.resolver');

const resolvers = {
    Query: {
        async hello(_, { name }) {
            return `Hello ${name || 'World'}`;
        },

        async inquiries() {
            return inquiries();
        },
    },
};

module.exports = resolvers;

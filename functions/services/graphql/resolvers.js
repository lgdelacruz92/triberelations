const resolvers = {
    Query: {
        async hello(_, { name }) {
            return `Hello ${name || 'World'}`;
        },

        async inquiries() {
            return [{ from: '1231', message: 'hely', to: '12341' }];
        },
    },
};

module.exports = resolvers;

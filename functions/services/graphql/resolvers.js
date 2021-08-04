const resolvers = {
    Query: {
        async hello(_, { name }) {
            return `Hello ${name || 'World'}`;
        },
    },
};

module.exports = resolvers;

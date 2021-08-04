const inquiry = require('./inquiries.schema');

const typeDefs = `
    ${inquiry.inquirySchema}
  
    type Query {
        hello(name: String): String!,
        inquiries: [Inquiry]!
    }
`;

module.exports = typeDefs;

const inquirySchema = `
    type Inquiry {
        from: String!,
        message: String!,
        to: String!
    }
`;

exports.inquirySchema = inquirySchema;

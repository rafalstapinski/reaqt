"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.StudentType = new graphql_1.GraphQLObjectType({
    name: 'Student',
    description: 'Student object type',
    fields: {
        id: {
            description: 'ID of the student',
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        name: {
            description: 'Name of the student',
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        }
    }
});
exports.default = exports.StudentType;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const student_1 = require("../models/student");
exports.StudentQueries = new graphql_1.GraphQLObjectType({
    name: 'StudentQueries',
    fields: {
        getStudentById: {
            name: 'GetStudentById',
            type: student_1.StudentType,
            args: {
                id: {
                    description: 'ID of the student',
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
                }
            },
            resolve: (_, { id }) => {
                if (id === '1') {
                    return { id: '1', name: 'pat' };
                }
                else if (id === '2') {
                    return { id: '2', name: 'raf' };
                }
            }
        },
        getStudentByName: {
            name: 'GetStudentByName',
            type: student_1.StudentType,
            args: {
                name: {
                    description: 'Name of the student',
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
                }
            },
            resolve: (_, { name }) => {
                if (name === 'pat') {
                    return { id: '1', name: 'pat' };
                }
                else if (name === 'raf') {
                    return { id: '2', name: 'raf' };
                }
            }
        }
    }
});
exports.default = exports.StudentQueries;
//# sourceMappingURL=student.js.map
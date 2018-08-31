"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_tools_1 = require("graphql-tools");
const student_1 = require("./queries/student");
const StudentSchema = new graphql_1.GraphQLSchema({
    query: student_1.default
});
exports.Schema = graphql_tools_1.mergeSchemas({
    schemas: [StudentSchema]
});
exports.default = exports.Schema;
//# sourceMappingURL=schema.js.map
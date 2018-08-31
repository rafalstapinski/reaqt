"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var graphql_tools_1 = require("graphql-tools");
var student_1 = require("./queries/student");
var StudentSchema = new graphql_1.GraphQLSchema({
    query: student_1.default
});
exports.Schema = graphql_tools_1.mergeSchemas({
    schemas: [StudentSchema]
});
exports.default = exports.Schema;

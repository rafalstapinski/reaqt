import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from "graphql";
import { StudentType } from "./models";
import { getStudent, getAllStudents } from "./data";

export const StudentQueries: GraphQLObjectType = new GraphQLObjectType({
  name: "StudentQueries",
  fields: {
    getStudent: {
      type: StudentType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: function(_, { id }) {
        return getStudent(id);
      }
    },
    getAllStudents: {
      type: new GraphQLList(StudentType),
      args: {
        name: { type: GraphQLString }
      },
      resolve: function(_, { name }) {
        return getAllStudents();
      }
    }
  }
});

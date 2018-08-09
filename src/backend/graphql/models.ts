import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString
} from "graphql";

export const StudentType: GraphQLObjectType = new GraphQLObjectType({
  name: "Student",
  description: "Student type",
  fields: () => ({
    id: {
      description: "ID of the student (unique).",
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      description: "The students name",
      type: GraphQLString
    }
  })
});

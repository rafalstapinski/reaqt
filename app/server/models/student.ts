import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} from 'graphql'
export const StudentType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Student',
  description: 'Student object type',
  fields: {
    id: {
      description: 'ID of the student',
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      description: 'Name of the student',
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})

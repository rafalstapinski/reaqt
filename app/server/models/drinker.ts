import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'
export const DrinkerType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Drinker',
  description: 'Drinker object type',
  fields: {
    _id: {
      description: 'ID of the drinker',
      type: new GraphQLNonNull(GraphQLInt)
    },
    name: {
      description: 'Name of the drinker',
      type: new GraphQLNonNull(GraphQLString)
    },
    address: {
      description: 'Address of the drinker',
      type: new GraphQLNonNull(GraphQLString)
    },
    city: {
      description: 'City of the drinker',
      type: new GraphQLNonNull(GraphQLString)
    },
    state: {
      description: 'State of the drinker',
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})

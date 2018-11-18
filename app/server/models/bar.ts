import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql'
export const BarType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Bar',
  description: 'Bar object type',
  fields: {
    _id: {
      description: 'ID of the bar',
      type: new GraphQLNonNull(GraphQLInt)
    },
    name: {
      description: 'Name of the bar',
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
    },
    opens: {
      description: 'Opening time as minutes after midnight',
      type: new GraphQLNonNull(GraphQLInt)
    },
    closes: {
      description: 'Closing time as minutes after midnight',
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
})

import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat
} from 'graphql'
export const TransactionType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Transaction',
  description: 'Transaction object type',
  fields: {
    _id: {
      description: 'ID of the transaction',
      type: new GraphQLNonNull(GraphQLInt)
    },
    total: {
      description: 'Transaction total',
      type: new GraphQLNonNull(GraphQLFloat)
    },
    timestamp: {
      description: 'Timestamp of the transaction',
      type: new GraphQLNonNull(GraphQLString)
    },
    drinkerId: {
      description: 'Drinker ID',
      type: new GraphQLNonNull(GraphQLInt)
    },
    barId: {
      description: 'Bar ID',
      type: new GraphQLNonNull(GraphQLInt)
    },
    drinkerName: {
      description: 'Drinker name',
      type: new GraphQLNonNull(GraphQLString)
    },
    barName: {
      description: 'Bar name',
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})

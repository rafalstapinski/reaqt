import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean
} from 'graphql'
export const ProductType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Product',
  description: 'Product object type',
  fields: {
    _id: {
      description: 'ID of the product',
      type: new GraphQLNonNull(GraphQLInt)
    },
    name: {
      description: 'Name of the product',
      type: new GraphQLNonNull(GraphQLString)
    },
    price: {
      description: 'Price of the product',
      type: new GraphQLNonNull(GraphQLFloat)
    },
    isBeer: {
      description: 'Boolean value is beer or not',
      type: new GraphQLNonNull(GraphQLBoolean)
    }
  }
})

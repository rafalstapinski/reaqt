import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql'
import { GQL } from '../../typings/gql'
import { ProductType } from '../models/product'
import { API_HOST } from '../config'
import axios from 'axios'

export const ProductQueries: GraphQLObjectType = new GraphQLObjectType({
  name: 'ProductQueries',
  fields: {
    getProducts: {
      name: 'GetProducts',
      type: new GraphQLList(ProductType),
      resolve: async (_, {}): Promise<GQL.GetProducts> => {
        const url = API_HOST + '/products'
        const result = await axios.get(url)

        if (result.status === 200) {
          result.data.products.map(product => {
            product.isBeer = product.is_beer
          })

          return result.data.products
        }
      }
    },
    getProduct: {
      name: 'GetProduct',
      type: ProductType,
      args: {
        id: {
          description: 'ID of the product',
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: async (_, { id }): Promise<GQL.GetProduct> => {
        const url = API_HOST + '/products/' + id

        const result = await axios.get(url)

        if (result.status === 200) {
          result.data.product.isBeer = result.data.product.is_beer
          return result.data.product
        }
      }
    }
  }
})

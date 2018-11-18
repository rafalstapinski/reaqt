import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql'
import { GQL } from '../../typings/gql'
import { BarType } from '../models/bar'
import { API_HOST } from '../config'
import axios from 'axios'

export const BarQueries: GraphQLObjectType = new GraphQLObjectType({
  name: 'BarQueries',
  fields: {
    getBars: {
      name: 'GetBars',
      type: new GraphQLList(BarType),
      resolve: async (_, {}): Promise<GQL.GetBars> => {
        const url = API_HOST + '/bars'
        const result = await axios.get(url)

        if (result.status === 200) {
          return result.data.bars
        }
      }
    },
    getBar: {
      name: 'GetBar',
      type: BarType,
      args: {
        id: {
          description: 'ID of the bar',
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: async (_, { id }): Promise<GQL.GetBar> => {
        const url = API_HOST + '/bars/' + id

        const result = await axios.get(url)
        if (result.status === 200) {
          return result.data.bar
        }
      }
    }
  }
})

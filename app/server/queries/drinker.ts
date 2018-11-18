import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql'
import { GQL } from '../../typings/gql'
import { DrinkerType } from '../models/drinker'
import { API_HOST } from '../config'
import axios from 'axios'

export const DrinkerQueries: GraphQLObjectType = new GraphQLObjectType({
  name: 'DrinkerQueries',
  fields: {
    getDrinkers: {
      name: 'GetDrinkers',
      type: new GraphQLList(DrinkerType),
      resolve: async (_, {}): Promise<GQL.GetDrinkers> => {
        const url = API_HOST + '/drinkers'
        const result = await axios.get(url)

        if (result.status === 200) {
          return result.data.drinkers
        }
      }
    },
    getDrinker: {
      name: 'GetDrinker',
      type: DrinkerType,
      args: {
        id: {
          description: 'ID of the drinker',
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: async (_, { id }): Promise<GQL.GetDrinker> => {
        const url = API_HOST + '/drinkers/' + id
        console.log(url)

        const result = await axios.get(url)

        if (result.status === 200) {
          return result.data.drinker
        }
      }
    }
  }
})

import { GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql'
import { GQL } from '../../typings/gql'
import { TransactionType } from '../models/transaction'
import { API_HOST } from '../config'
import axios from 'axios'

export const TransactionQueries: GraphQLObjectType = new GraphQLObjectType({
  name: 'TransactionQueries',
  fields: {
    getTransactionsAt: {
      name: 'GetTransactionsAt',
      description: 'Gets transactions at a bar by bar ID',
      type: new GraphQLList(TransactionType),
      args: {
        barId: {
          type: GraphQLInt,
          description: 'ID of the bar'
        }
      },
      resolve: async (_, { barId }) => {
        const url = API_HOST + '/bars/' + barId + '/transactions'
        const result = await axios.get(url)

        if (result.status === 200) {
          result.data.transactions.map(t => {
            t.drinkerId = t.drinker_id
            t.barId = t.bar_id
            t.drinkerName = t.drinker_name
            t.barName = t.bar_name
          })

          return result.data.transactions
        }
      }
    },
    getTransactionsOf: {
      name: 'GetTransactionsAt',
      description: 'Gets transactions at a drinker by drinker ID',
      type: new GraphQLList(TransactionType),
      args: {
        drinkerId: {
          type: GraphQLInt,
          description: 'ID of the drinker'
        }
      },
      resolve: async (_, { drinkerId }) => {
        const url = API_HOST + '/drinkers/' + drinkerId + '/transactions'
        const result = await axios.get(url)

        if (result.status === 200) {
          result.data.transactions.map(t => {
            t.drinkerId = t.drinker_id
            t.barId = t.bar_id
            t.drinkerName = t.drinker_name
            t.barName = t.bar_name
          })

          return result.data.transactions
        }
      }
    }
  }
})

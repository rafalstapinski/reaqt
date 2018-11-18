import { GraphQLSchema } from 'graphql'
import { mergeSchemas } from 'graphql-tools'
import { DrinkerQueries } from './queries/drinker'
import { ProductQueries } from './queries/product'
import { BarQueries } from './queries/bar'
import { TransactionQueries } from './queries/transaction'

const DrinkerSchema: GraphQLSchema = new GraphQLSchema({
  query: DrinkerQueries
})

const BarSchema: GraphQLSchema = new GraphQLSchema({
  query: BarQueries
})

const ProductSchema: GraphQLSchema = new GraphQLSchema({
  query: ProductQueries
})

const TransactionSchema: GraphQLSchema = new GraphQLSchema({
  query: TransactionQueries
})

export const Schema: GraphQLSchema = mergeSchemas({
  schemas: [DrinkerSchema, BarSchema, ProductSchema, TransactionSchema]
})

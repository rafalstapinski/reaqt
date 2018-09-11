import { GraphQLSchema } from 'graphql'
import { mergeSchemas } from 'graphql-tools'
import { StudentQueries } from './queries/student'

const StudentSchema: GraphQLSchema = new GraphQLSchema({
  query: StudentQueries
})

export const Schema: GraphQLSchema = mergeSchemas({
  schemas: [StudentSchema]
})

import { GraphQLSchema } from "graphql";
import { StudentQueries } from './queries'

export const schema: GraphQLSchema = new GraphQLSchema({query: StudentQueries}); 
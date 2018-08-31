import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from 'graphql'
import { StudentType } from '../models/student'

export const StudentQueries: GraphQLObjectType = new GraphQLObjectType({
  name: 'StudentQueries',
  fields: {
    getStudentById: {
      name: 'GetStudentById',
      type: StudentType,
      args: {
        id: {
          description: 'ID of the student',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (_, { id }): GQL.SelectionOnGetStudentById => {
        if (id === '1') {
          return { id: '1', name: 'pat' }
        } else if (id === '2') {
          return { id: '2', name: 'raf' }
        }
      }
    },
    getStudentByName: {
      name: 'GetStudentByName',
      type: StudentType,
      args: {
        name: {
          description: 'Name of the student',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (_, { name }): GQL.SelectionOnGetStudentById => {
        if (name === 'pat') {
          return { id: '1', name: 'pat' }
        } else if (name === 'raf') {
          return { id: '2', name: 'raf' }
        }
      }
    }
  }
})

export default StudentQueries

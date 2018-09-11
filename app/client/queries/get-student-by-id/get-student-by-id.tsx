import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_STUDENT_BY_ID from './get-student-by-id.graphql'

export const GetStudentById = id => (
  <Query query={GET_STUDENT_BY_ID} variables={id}>
    {({ loading, error, data }) => {
      if (loading) return 'loading'
      if (error) return `Error! ${error.message}`

      return (
        <p>
          id: {data.getStudentById.id} name: {data.getStudentById.name}
        </p>
      )
    }}
  </Query>
)

import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_STUDENT_BY_NAME from './get-student-by-name.graphql'

export const GetStudentByName = name => (
  <Query query={GET_STUDENT_BY_NAME} variables={name}>
    {({ loading, error, data }) => {
      if (loading) return 'loading'
      if (error) return `Error! ${error.message}`

      return (
        <p>
          id: {data.getStudentByName.id} name: {data.getStudentByName.name}
        </p>
      )
    }}
  </Query>
)

// graphql typescript definitions

export namespace GQL {
interface GraphQLResponseRoot {
  data?: Query
  errors?: Array<GraphQLResponseError>
}

interface GraphQLResponseError {
  /** Required for all errors */
  message: string
  locations?: Array<GraphQLResponseErrorLocation>
  /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
  [propName: string]: any
}

interface GraphQLResponseErrorLocation {
  line: number
  column: number
}

interface Query {
  __typename: 'Query'
  getStudentById: Student | null
  getStudentByName: Student | null
}

interface GetStudentByIdOnQueryArguments {
  /** ID of the student */
  id: string
}

interface GetStudentByNameOnQueryArguments {
  /** Name of the student */
  name: string
}

/** Student object type */
interface Student {
  __typename: 'Student'
  /** ID of the student */
  id: string
  /** Name of the student */
  name: string
}

export interface GetStudentByIdInput {
  id: string
}

export interface SelectionOnGetStudentById {
  id: string
  name: string
}

export interface GetStudentById {
  getStudentById: SelectionOnGetStudentById | null
}

export interface GetStudentByNameInput {
  name: string
}

export interface SelectionOnGetStudentByName {
  id: string
  name: string
}

export interface GetStudentByName {
  getStudentByName: SelectionOnGetStudentByName | null
}

}
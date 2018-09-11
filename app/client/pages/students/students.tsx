import * as React from 'react'
import { GetStudentById } from '../../queries/get-student-by-id/get-student-by-id'
import { GetStudentByName } from '../../queries/get-student-by-name/get-student-by-name'

export const Students: React.SFC = () => {
  return (
    <>
      <GetStudentById id={'1'} />
      <GetStudentByName name={'raf'} />
    </>
  )
}

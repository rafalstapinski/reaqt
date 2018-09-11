import { Schema } from '../app/server/schema'
import * as fs from 'fs'
import { generateNamespace } from '@gql2ts/from-schema'
import * as humps from 'humps'
import * as path from 'path'
import fromQuery from '@gql2ts/from-query'

const gqlFilePath = '../app/typings/gql.d.ts'
const clientPath = path.join(__dirname, '../app/client')

const walkSync = (dir, filelist) => {
  if (dir[dir.length - 1] != '/') dir = dir.concat('/')
  const files = fs.readdirSync(dir)
  filelist = filelist || []

  for (const file of files) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist)
    } else {
      filelist.push(dir + file)
    }
  }
  return filelist
}

try {
  const ns = generateNamespace('GQL', Schema, null, {
    generateInterfaceName: name => humps.pascalize(name),
    generateDocumentation: documentation =>
      documentation.description ? `/** ${documentation.description} */` : '',
    addSemicolon: str => `${str}`,
    formatInput: (name, isOptional, type) =>
      `${name}${isOptional ? '?:' : ':'} ${type}`,
    generateNamespace: (_, interfaces) => `${interfaces} `
  })

  fs.writeFileSync(
    gqlFilePath,
    `// graphql typescript definitions\n\ndeclare namespace GQL {\n${ns}\n`
  )

  const files = walkSync(clientPath, [])

  for (const file of files) {
    if (path.extname(file) === '.graphql' || path.extname(file) === '.gql') {
      const query = fs.readFileSync(file)
      const tsDefinitions = fromQuery(Schema, query.toString(), {}, {})
      const allDefinitions = tsDefinitions
        .map(({ result }) => result)
        .join('\n')
      fs.appendFileSync(gqlFilePath, allDefinitions)
      fs.appendFileSync(gqlFilePath, '\n')
    }
  }

  fs.appendFileSync(gqlFilePath, `}`)

  console.log('Successfully created gql.d.ts file')
} catch (err) {
  console.log('Error creating gql.d.ts file')
  throw err
}

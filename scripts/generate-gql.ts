import { Schema } from '../app/server/schema'
import * as fs from 'fs'
import { generateNamespace } from '@gql2ts/from-schema'
import * as humps from 'humps'
import * as path from 'path'
import fromQuery from '@gql2ts/from-query'

const gqlFilePath = './app/typings/gql.ts'
const clientQueryPath = path.join(__dirname, '../app/client/queries')
let output = ''

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

  output += `// graphql typescript definitions\n\nexport namespace GQL {\n${ns}\n`

  const files = walkSync(clientQueryPath, [])

  for (const file of files) {
    if (path.extname(file) === '.graphql' || path.extname(file) === '.gql') {
      console.log(file)

      const query = fs.readFileSync(file)
      const tsDefinitions = fromQuery(Schema, query.toString(), {}, {})
      const allDefinitions = tsDefinitions
        .map(({ result }) => result)
        .join('\n')
      output += allDefinitions + '\n'
    }
  }

  output += '}'

  fs.writeFileSync(gqlFilePath, output)

  console.log('Successfully created gql.ts file')
} catch (err) {
  console.log('Error creating gql.ts file')

  throw err
}

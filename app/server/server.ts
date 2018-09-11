import { StaticsDevRouter } from './routes/statics-dev-router'
import { StaticsRouter } from './routes/statics-router'
import * as express from 'express'
import * as express_graphql from 'express-graphql'
import { Schema } from './schema'
import * as config from './config'
const app: express.Application = express()

app.use(
  '/graphql',
  express_graphql({
    schema: Schema,
    graphiql: true
  })
)

app.use(config.IS_PRODUCTION ? StaticsRouter() : StaticsDevRouter())

app.listen(config.SERVER_PORT, () => {
  console.log(`Listening at http://localhost:${config.SERVER_PORT}/`)
})

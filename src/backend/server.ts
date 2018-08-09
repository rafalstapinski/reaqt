/* app/server.ts */
import * as express from 'express';
var express_graphql = require('express-graphql');
import { schema } from './graphql';
import {routes} from './routes';

const app: express.Application = express();
const port: number = 3001 || process.env.PORT;

app.use('/graphql', express_graphql({
    schema: schema,
    graphiql: true
}));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
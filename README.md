# REQT
This repo is a working example of a React App that queries a GraphQL API using an Apollo Client. Both the frontend and backend are written in TypeScript.

## Setup
Setting up a react and express frontend/backend server using typescript with apollo graphql typescript type compiling support

How to do this: 

Create backend graphql api with node and express

```javascript
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
```

Do GQL typing with apollo

Create frontend react app which queries backend using apollo

## With help from these tutorials:

[Creating an express app with Typescript](https://github.com/BrianDGLS/express-ts)


[Adding graphQL to an express app](https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1)


[Autogenerating types with apollo](https://github.com/apollographql/apollo-cli)


[Create-React-App with Typescript](https://github.com/wmonk/create-react-app-typescript)


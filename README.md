# reaqt

<p align="center">
<img src="https://www.shareicon.net/download/2016/07/08/117367_logo.ico" width="100" height="100">
<img src="https://seeklogo.com/images/A/apollo-logo-DC7DD3C444-seeklogo.com.png" width="100" height="100">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/200px-GraphQL_Logo.svg.png" width="100" height="100">

<h1 align="center" >a React Express Apollo GraphQL Typescript boilerplate</h3>
</p>

This repo is a working boilerplate of a React app that queries a GraphQL API using the Apollo Client. Both the client and the server are written in TypeScript with individual tsconfig.json files. This boilerplate is based off of the [fullstack-typescript](https://github.com/gilamran/fullstack-typescript) repo.

## GQL Type Generation

Auto compile GraphQL types from client graphql query files and server schema with `npm run gql`. GraphQL types are stored in `app/typings/gql.d.ts` and are globally accessible in the `GQL` namespace. These are useful for keeping a single source of truth for client and server interactions with GraphQL. For example, if we have the query getStudentById we can keep a single source of truth for query arguments: `GQL.GetStudentByIdOnQueryArguments`, return type:`GQL.SelectionOnGetStudentById`, and model: `GQL.Student`. This is extremely useful when using types in both the client and the server, and you can make sure they match with the GQL types thanks to Typescript.

Server schema needs to be updated in `app/server/schema.ts` when any new query files that are created on the server side. Client side queries live inside `queries/**/` folders as .graphql files alongside Apollo Query components.

To modify type generation, update the file `generate-gql.ts` in `scripts/generate-gql`. It picks up the schema from `app/server/schema.ts` and scans the `app/client` directory for any new `.graphql` files.

## Setup

To run the development server

```sh
npm install
npm run dev
```

## Directory Structure

```
.
+--app
| +--client
|   +--components
|   +--pages
|   +--queries
| +--server
|   +--models
|   +--queries
|   +--routes
+--dist
+--node_modules
+--scripts
| +--generate-gql
```

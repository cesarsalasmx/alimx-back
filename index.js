const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require("graphql");
const resolvers = require("./graphql/resolvers");
const schema = new GraphQLSchema({ mutation: resolvers });

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
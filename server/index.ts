import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';
import resolvers from './resolvers';

const typeDefs = readFileSync('./../schema.graphql', 'utf8');

const server = new ApolloServer({ typeDefs, resolvers });
const port = 3000;

// The `listen` method launches a web server
server.listen({port}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
/**
 * Dependencies
 */
import { ApolloServer } from "apollo-server";

/**
 * Schema
 */
import { typeDefs } from "../src/schema/schema";

/**
 * Resolvers
 */
import { Query } from "../src/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});

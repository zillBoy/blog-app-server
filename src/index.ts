/**
 * Dependencies
 */
import { ApolloServer } from "apollo-server";
import { PrismaClient, Prisma } from "@prisma/client";

/**
 * Schema
 */
import { typeDefs } from "../src/schema/schema";

/**
 * Resolvers
 */
import { Query, Mutation } from "../src/resolvers";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});

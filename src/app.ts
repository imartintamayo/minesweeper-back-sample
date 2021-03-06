import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import resolvers from './resolvers';

export default async function startServer() {
    const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers,
        }),
        context: ({req, res}) => ({req, res})
    });

    server.applyMiddleware({ app, path: '/graphql' });
    return app;
}

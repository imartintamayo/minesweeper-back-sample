import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { MinesweeperResolver } from './resolvers/minesweeper.resolver';

export const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [MinesweeperResolver]
        }),
        context: ({req, res}) => ({req, res})
    });

    server.applyMiddleware({ app, path: '/graphql' });
    return app;
}

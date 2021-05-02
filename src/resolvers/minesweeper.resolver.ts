import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { createGame, getGame, listGames } from '../repository/minesweeper.repository';
import { CreateGameInput, GetGameInput, Game } from '../types/minesweeper.types';

@Resolver()
export class MinesweeperResolver {
    @Query(() => [Game])
    async listGames() {
        const games = await listGames();
        return games;
    }

    @Query(() => Game)
    async getGame(
        @Arg('input') input: GetGameInput
    ) {
        const game = await getGame(input);
        return game;
    }

    @Mutation(() => Game)
    async createGame(
        @Arg('input') input: CreateGameInput
    ) {
        const game = await createGame(input);
        return game;
    }
}
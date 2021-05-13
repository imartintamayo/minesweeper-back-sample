import {
  Query, Resolver, Mutation, Arg,
} from 'type-graphql';
import * as gameRepository from '../repository/game.repository';
import { CreateGameInput, GetGameInput, Game } from '../types/game.types';
import GameNotFoundException from '../exceptions/game-not-found.exception';

@Resolver()
export default class MinesweeperResolver {
    @Query(() => Game)
  async getGame(
        @Arg('input') input: GetGameInput,
  ) {
    const game = await gameRepository.getGameById(input);
    if (!game) {
      throw new GameNotFoundException(input);
    }

    return game;
  }

    @Mutation(() => Game)
    async createGame(
        @Arg('input') input: CreateGameInput,
    ) {
      const game = await gameRepository.createGame(input);
      return game;
    }
}

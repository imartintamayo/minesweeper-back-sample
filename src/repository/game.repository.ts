import GameModel from './models/game.model';
import { CreateGameInput, Game, GetGameInput } from '../types/game.types';

export const createGame = async (createGameInput: CreateGameInput): Promise<Game> => {
  const game = new GameModel(createGameInput);
  await game.save();
  return game;
};

export const getGameById = async (getGameInput: GetGameInput): Promise<Game> => {
  const game = await GameModel.findById(getGameInput.gameId);
  return game;
};

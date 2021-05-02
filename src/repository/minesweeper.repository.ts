import MinesweeperModel from './models/minesweeper.model';
import { CreateGameInput, Game } from '../types/minesweeper.types';

export const createGame = async (input: CreateGameInput): Promise<Game> => {
  const game = new MinesweeperModel(input);
  await game.save();
  return game;
};

export const getGame = async (input: CreateGameInput): Promise<Game> => {
  const game = await MinesweeperModel.findOne(input);
  return game;
};

export const listGames = async (): Promise<Game[]> => {
  const games = await MinesweeperModel.find();
  return games;
};

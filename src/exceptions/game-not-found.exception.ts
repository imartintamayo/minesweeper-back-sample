import { GetGameInput } from '../types/game.types';

export default class GameNotFoundException extends Error {
    public code: number;

    constructor(input: GetGameInput) {
      super(`Game with id: "${input.gameId}" NOT found.`);
      this.name = 'GameNotFoundException';
      this.code = 404;
    }
}

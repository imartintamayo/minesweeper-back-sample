import { GetUserInput } from '../types/user.types';

export default class UserNotFoundException extends Error {
    public code: number;

    constructor(input: GetUserInput) {
      super(`User with userName: "${input.userName}" NOT found.`);
      this.name = 'UserNotFoundException';
      this.code = 404;
    }
}

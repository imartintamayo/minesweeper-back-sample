import {
  Query, Resolver, Mutation, Arg,
} from 'type-graphql';
import * as userRepository from '../repository/user.repository';
import { CreateUserInput, GetUserInput, User } from '../types/user.types';
import UserNotFoundException from '../exceptions/user-not-found.exception';

@Resolver()
export default class UsersResolver {
    @Query(() => User)
  async getUser(
        @Arg('input') input: GetUserInput,
  ) {
    const user = await userRepository.getUserByUserName(input);
    if (!user) {
      throw new UserNotFoundException(input);
    }

    return user;
  }

    @Mutation(() => User)
    async createUser(
        @Arg('input') input: CreateUserInput,
    ) {
      const user = await userRepository.createUser(input);
      return user;
    }
}

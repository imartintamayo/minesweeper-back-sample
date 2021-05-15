import UserModel from './models/user.model';
import { CreateUserInput, User, GetUserInput } from '../types/user.types';

export const createUser = async (createUserInput: CreateUserInput): Promise<User> => {
  const user = new UserModel(createUserInput);
  await user.save();
  return user;
};

export const getUserByUserName = async (getUserInput: GetUserInput): Promise<User> => {
  const user = await UserModel.findOne({ userName: getUserInput.userName });
  return user;
};

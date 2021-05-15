import { Field, InputType, ObjectType } from 'type-graphql';
// import { Game } from './game.types';

@InputType()
export class CreateUserInput {
    @Field()
    userName!: string;
}

@InputType()
export class GetUserInput {
    @Field()
    userName!: string;
}

@ObjectType()
export class User {
    @Field()
    _id!: string;

    @Field()
    createdAt!: string;

    @Field()
    updatedAt!: string;

    @Field()
    userName!: string;

  // @Field()
  // games!: [Game];
}

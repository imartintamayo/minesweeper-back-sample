import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
export class CreateGameInput {
    @Field()
    gameId!: string;
}

@InputType()
export class GetGameInput {
    @Field()
    gameId!: string;
}

@ObjectType()
export class Game {
    @Field()
    _id!: string;

    @Field()
    gameId!: string;
}

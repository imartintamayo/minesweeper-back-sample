import { Field, InputType, ObjectType } from 'type-graphql';
// import { GameNode } from './game-node.types';

@InputType()
export class CreateGameInput {
    @Field()
    userId!: string;

    @Field()
    numRows!: number;

    @Field()
    numColumns!: number;

    @Field()
    numMines!: number;

    @Field()
    label!: string;
}

@InputType()
export class UpdateGameInput {
    @Field()
    timeSpent!: string;

    @Field()
    label!: string;
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
    createdAt!: string;

    @Field()
    updatedAt!: string;

    @Field()
    userId!: string;

    @Field()
    isGameOver!: boolean;

    @Field()
    numRows!: number;

    @Field()
    numColumns!: number;

    @Field()
    numMines!: number;

    @Field()
    timeSpent!: string;

    // @Field()
    // gameNodes!: [GameNode];

    @Field()
    label!: string;
}

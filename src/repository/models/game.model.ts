import { Schema, model } from 'mongoose';

const gameSchema = new Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },

    userId: {
        type: String,
        required: true,
    },

    isGameOver: {
        type: Boolean,
        required: true,
        default: false,
    },

    numRows: {
        type: Number,
        required: true,
        min: 4,
        max: 15,
    },

    numColumns: {
        type: Number,
        required: true,
        min: 4,
        max: 15,
    },

    numMines: {
        type: Number,
        required: true,
        min: 4,
        max: 150,
    },

    timeSpent: {
        type: String,
        required: true,
        default: '00:00:00'
    },

    gameNodes: [
        {
            type: String,
            required: true,
            default: ''
        }
    ],

    label: {
        type: String,
        required: false,
    },
});

export default model('Game', gameSchema);
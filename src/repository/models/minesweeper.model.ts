import { Schema, model } from 'mongoose';

const minesweeperSchema = new Schema({
    gameId: {
        required: true,
        type: String,
    }
});

export default model('Minesweeper', minesweeperSchema);
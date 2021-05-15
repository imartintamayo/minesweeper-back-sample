import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: {
        required: true,
        unique: true,
        type: String,
    },

    createdAt: {
        default: Date.now,
        type: Date
    },

    updatedAt: {
        default: Date.now,
        type: Date
    },

    games: [
        { type: Schema.Types.ObjectId, ref: 'Game' },
    ],
});

export default model('User', userSchema);
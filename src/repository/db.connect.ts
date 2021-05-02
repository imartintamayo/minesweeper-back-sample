import mongooose from 'mongoose';

export const connect = async () => {
    try {
        await mongooose.connect('mongodb://localhost/minesweeper', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected');
    } catch (error) {
        console.log('error connecting to db', error);
    }
}

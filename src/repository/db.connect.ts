import mongooose from 'mongoose';

export default async function connect() {
  try {
    await mongooose.connect('mongodb://localhost/minesweeper', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected'); // eslint-disable-line
  } catch (error) {
    console.log('error connecting to db', error); // eslint-disable-line
  }
}

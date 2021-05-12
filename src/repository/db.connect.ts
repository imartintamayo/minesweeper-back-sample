import mongooose from 'mongoose';
import { environment } from '../environment';

export default async function connect() {
  try {
    await mongooose.connect(environment.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected'); // eslint-disable-line
  } catch (error) {
    console.log('error connecting to db', error); // eslint-disable-line
  }
}

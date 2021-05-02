require('dotenv').config();
import { Environment } from './types/environment.types';

const environment: Environment = {
    port: process.env.PORT || '3000',
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost/minesweeper',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default environment;
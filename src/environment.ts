import { Environment } from './types/app.types';

export const environment: Environment = {
    port: '3000',
    mongoUri: 'mongodb://localhost/minesweeper',
};

const loadConfigFile = () => {
	const envFileName =  process.env.ENVIRONMENT !== 'development' ? process.env.ENVIRONMENT : '';
	
    require("dotenv-safe").config({
		path: `${envFileName}.env`,
	});
};

const setPort = () => {
    environment.port = process.env.PORT ? process.env.PORT : environment.port;
};

const setMongoUri = () => {
    environment.mongoUri = process.env.MONGODB_URI ? process.env.MONGODB_URI : environment.mongoUri;
};

export const loadConfig = () => {
    loadConfigFile();

    setPort(); 
    setMongoUri(); 
};

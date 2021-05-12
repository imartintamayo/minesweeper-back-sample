import 'reflect-metadata';
import startServer from './app';
import connect from './repository/db.connect';
import { loadConfig, environment } from './environment';

const main = async () => {
    loadConfig();
    await connect();
    const app = await startServer();

    app.listen(environment.port);
    console.log(`Server on port: ${environment.port}`); // eslint-disable-line
}

main();
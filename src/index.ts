import 'reflect-metadata';
import startServer from './app';
import connect from './repository/db.connect';
import environment from './environment';

const main = async () => {
    await connect();
    const app = await startServer();

    app.listen(environment.port);
    console.log(`Server on port: ${environment.port}`); // eslint-disable-line
}

main();
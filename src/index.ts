import 'reflect-metadata';
import { startServer } from './app';
import { connect } from './repository/db.connect';

const main = async () => {
    await connect();
    const app = await startServer();
    const port = 3000;

    app.listen(port);
    console.log(`Server on port: ${port}`);
}

main();
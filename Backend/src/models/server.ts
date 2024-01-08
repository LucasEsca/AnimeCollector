import express, { Application } from 'express';
import cors from 'cors';
import routesAnime from '../routes/anime';
import routesUser from '../routes/user';
import { User } from './user';
import { Anime } from './anime';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/anime', routesAnime);
        this.app.use('/api/users', routesUser);
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Anime.sync()
            await User.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;
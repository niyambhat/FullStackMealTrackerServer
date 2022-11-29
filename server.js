import express from 'express';
import { db } from './db/db.js';
import { routes } from './routes/index.js';

const app = express();
app.use(express.json());

routes.forEach(route => {
  app[route.method]('/api' + route.path, route.handler);
});

const start = async () => {
    await db.connect();
    await app.listen(3000);
    console.log("Listening on port 3000");
}

start();
/*
yarn init --yes
yarn add express
yarn add nodemon -D
yarn add typescript ts-node @types/express @types/node -D
yarn tsc --init

Добавляем скрипт для сборки билда: "build": "tsc"
Добавляем скрипт для запуска билда: "start": "node dist/index.js"
*/
import express, {Request, Response} from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    let message = 'Hi';
    res.send(message);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
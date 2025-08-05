/*
Установка yarn: npm install --global yarn
Инициализация файла "package.json" (можно добавить флаг "--yes", чтобы не отвечать на вопросы): yarn init
Установка Express: yarn add express
Установка nodemon: yarn add nodemon -D
Установка Typescript, ts-node, типов для Express, типов для Node.js:
yarn add typescript ts-node @types/express @types/node -D
Инициализация файла "tsconfig.json": yarn tsc --init
Настройка файла "tsconfig.json": в разделе "outDir" указать папку для скомпилированных файлов
Создание скриптов для запуска автоматической компиляции всего приложения в .js, запуска приложения локально через
nodemon с возможностью отладки, компиляции всего приложения в .js и запуска приложения через Node.js:
в файл "package.json" перед разделом "dependencies" добавить:
"scripts": {
    "watch": "tsc -w",
    "dev": "nodemon .\\dist\\src\\index.js",
    "build": "tsc",
    "start": "node dist/index.js"
},

Запуск приложения:
0.
Установка всех модулей (если необходимо): yarn install
1.
Компиляция одного файла .ts в .js: yarn tsc имя_файла
Компиляция всего приложения в .js: yarn tsc
Компиляция всего приложения в .js (скрипт): yarn build
Автоматическая компиляция всего приложения в .js: yarn tsc -w
Автоматическая компиляция всего приложения в .js (скрипт): yarn watch
2.
Запуск приложения локально через nodemon: yarn nodemon .\dist\src\index.js
Запуск приложения локально через nodemon с возможностью отладки: yarn nodemon --inspect .\dist\src\index.js
Запуск приложения локально через nodemon с возможностью отладки (скрипт): yarn dev
Запуск приложения через Node.js: node dist/index.js
Запуск приложения через Node.js (скрипт): yarn start

Это простой HTTP-сервер на Express, который развернут на сайте (lesson 011).
*/

/*Импортируем express для создания HTTP-сервера. Импортируем Request и Response из Express для типизации.*/
import express, {Request, Response} from 'express';

/*Создаем приложение на Express.*/
const app = express();
/*Делаем так, чтобы порт определялся автоматически от окружения.*/
const port = process.env.PORT || 5000;

/*Конфигурируем GET-запрос.*/
app.get('/', (req: Request, res: Response) => {
    let message = 'Hello';
    res.send(message);
});

/*Устанавливаем порт для прослушивания.*/
app.listen(port, () => { console.log(`app listening on port ${port}`)});
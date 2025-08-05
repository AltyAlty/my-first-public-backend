/*
Установка yarn: npm install --global yarn
Инициализация файла "package.json": yarn init
Установка Express: yarn add express
Установка nodemon: yarn add nodemon -D
Установка Typescript, ts-node, типов для Express, типов для Node.js:
yarn add typescript ts-node @types/express @types/node -D
Инициализация файла "tsconfig.json": yarn tsc --init
Настройка файла "package.json" под vercel.com: смотри сам файл
Настройка файла "tsconfig.json" под vercel.com: смотри сам файл
Создание файла "vercel.json" под vercel.com: смотри сам файл

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

Разворачивание приложения на vercel.com:
Залогиниться на vercel.com
Перейти на Dashboard
Выбрать "Add New..." - "Project"
Выбрать "Continue with GitHub"
Импортировать нужный репозиторий
Указать "Build Command" как "yarn vercel-build"
Указать "Output Directory" как "dist"
Указать "Install Command" как "yarn install"

Это простой HTTP-сервер на Express, который развернут на сайте vercel.com (lesson 011).
*/

/*Импортируем express для создания HTTP-сервера.*/
import express from 'express';
/*Импортируем Request и Response из Express для типизации.*/
import type {Request, Response} from 'express';

/*Делаем так, чтобы порт определялся автоматически от окружения. При развертывании на vercel.com этого не требуется.*/
// const port = process.env.PORT || 8008;

/*Создаем приложение на Express.*/
const app = express();

/*Конфигурируем GET-запрос.*/
app.get('/', (req: Request, res: Response) => { res.send('Hello!')});

/*Устанавливаем какой порт прослушивается. При развертывании на vercel.com этого не требуется.*/
// app.listen(port, () => { console.log(`Example app listening on port ${port}`)});

/*Экспортируем приложение для vercel.com.*/
export default async (req: Request, res: Response) => { app(req, res)};
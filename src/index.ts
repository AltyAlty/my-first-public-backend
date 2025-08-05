/*
Установка yarn: npm install --global yarn

Инициализация файла "package.json" (можно добавить флаг "--yes", чтобы не отвечать на вопросы): yarn init

Установка Express: yarn add express

Установка nodemon: yarn add nodemon -D

Установка Typescript, ts-node, типов для Express, типов для Node.js:
yarn add typescript ts-node @types/express @types/node -D

Инициализация файла "tsconfig.json": yarn tsc --init

Настройка файла "tsconfig.json":
в разделе "outDir" указать папку для скомпилированных файлов и после раздела "compilerOptions" добавить раздел "include"
Создание скриптов для запуска автоматической компиляции всего приложения в .js, запуска приложения локально через
nodemon с возможностью отладки, компиляции всего приложения в .js, запуска приложения через Node.js и специальный скрипт
для Vercel:
в файл "package.json" перед разделом "dependencies" добавить:
"scripts": {
    "watch": "tsc -w",
    "dev": "nodemon .\\dist\\src\\index.js",
    "build": "tsc",
    "start": "node dist/index.js",
    "vercel-build": "yarn build"
}

Указание версии Node.js для Vercel в файле "package.json":
в конце добавить:
"engines": {
    "node": "18.x"
  }

Настройка файла "package.json":
перед разделом "scripts" добавить: "type": "module"

Создание файла "vercel.json":
{
  "version": 2,
  "builds": [
    {
      "src": "src/index.ts",
      "use": "@vercel/node",
      "config": { "includeFiles": ["dist/**"] }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/index.ts"
    }
  ]
}

Экспортирование приложения для Vercel: в конце добавить "module.exports = app;"


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
Выбрать Add New... - Project
Выбрать Continue with GitHub
Импортировать нужный репозиторий
Указать Build Command как "yarn vercel-build"
Указать Output Directory как "dist"
Указать Install Command как "yarn install"


Это простой HTTP-сервер на Express, который развернут на сайте www.vercel.com (lesson 011).
*/

/*Импортируем express для создания HTTP-сервера. Импортируем Request и Response из Express для типизации.*/
import express, {Request, Response} from 'express';

/*Создаем приложение на Express.*/
const app = express();
/*Конфигурируем GET-запрос.*/
app.get('/', (req: Request, res: Response) => { res.send('Hello!')});

/*Экспортируем приложение для Vercel.*/
module.exports = app;
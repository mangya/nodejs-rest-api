# NodeJS API boilerplate
![GitHub license](https://img.shields.io/github/license/mangya/nodejs-rest-api) ![GitHub repo size](https://img.shields.io/github/repo-size/mangya/nodejs-rest-api) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/c4792a4ff1074def98ad8e8c99c3d67e)](https://app.codacy.com/gh/mangya/nodejs-rest-api/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

A boilerplate for **Node.js** API. This boilerplate gives the minimal structure of application start with while bundling enough useful features so as to remove all those redundant tasks that can derail a project before it even really gets started. This boilerplate users Express with sequelize as ORM and MySQL/PostgreSQL as database.

### Prerequisites

1. ```NodeJs```
2. ```NPM```
3. ```MySQL/PostgreSQL```

### Quick start

1. Clone the repository with `git clone https://github.com/mangya/nodejs-rest-api.git <your_project_folder_name>`
2. Change directory to your project folder `cd <your_project_folder_name>`
3. Install the dependencies with `npm install`
4. Create database in MySQL/PostgreSQL.
5. Update the your database name and credentials in the `.env` file.
6. Run the application with `npm start` (MySQL/PostgreSQL service should be up and running).
7. Access `http://localhost:3000` and you're ready to go!

### Project Structure
```sh
.
├── app/
│   ├── controllers/           # Route controllers (controller layer)
│   ├── middlewares/           # Middlewares
│   ├── models/                # Express database models (data layer)
├── config/
├── database/
│   ├── migrations/            # Database migrations
├── helpers/                   # Utility classes and functions
├── .env                       # API keys, passwords, and other sensitive information
├── routes/                    # Route definitions
├── tests/                     # Tests
├── index.js                   # Express application
└── package.json               # NPM Dependencies and scripts
```
### Creating new models
If you need to add more models to the project just create a new file in `/models/` and use them in the controllers.
```bash
npx sequelize-cli model:generate --underscored --name <modelName> --attributes column1:string,column2:string,column3:string
```

### Running the migrations
```bash
npx sequelize-cli db:migrate
```

### Creating new routes
If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes/index.js` it will be loaded dynamically.

### Creating new controllers
If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.

## Tests

### Running Test Cases

```bash
npm test
```

You can set custom command for test at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of mocha command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/tests/` and run the command.

## Packages used
* [nodemon](https://github.com/remy/nodemon) — tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js) — encryption library to hash a password
* [body-parser](https://github.com/expressjs/body-parser) — Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [dotenv](https://github.com/motdotla/dotenv) — module to load environment variables from a .env file
* [express](https://github.com/visionmedia/express) — web application framework for node
* [helmet](https://github.com/helmetjs/helmet) — Help secure Express apps by setting HTTP response headers.
* [http-status](https://github.com/adaltas/node-http-status) — Utility to interact with HTTP status codes.
* [passport](https://github.com/jaredhanson/passport) — authentication middleware for Node.js.
* [pg](https://github.com/brianc/node-postgres) — PostgreSQL client for Node.js. (You can remove this if using MySQL as database)
* [pg-hstore](https://github.com/scarney81/pg-hstore) — A node package for serializing and deserializing JSON data to hstore format (You can remove this if using MySQL as database)
* [mysql2](https://github.com/sidorares/node-mysql2) — MySQL client for Node.js. (You can remove this if using PostgreSQL as database)
* [sequelize](https://github.com/sequelize/sequelize) — Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

## Postman Collection
available in the repo

## Contributing

This boilerplate is open to suggestions and contributions, documentation contributions are also welcome! 😊
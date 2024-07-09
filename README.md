# NodeJS API boilerplate

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
If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes/api.js` it will be loaded dynamically.

### Creating new controllers
If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.

## Tests

### Running Test Cases

```bash
npm test
```

You can set custom command for test at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of mocha command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/test/` and run the command.

## Packages used
* [nodemon](https://github.com/remy/nodemon) — tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js) — encryption library to hash a password
* [body-parser](https://github.com/expressjs/body-parser) — Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [dotenv](https://github.com/motdotla/dotenv) — module to load environment variables from a .env file
* [express](https://github.com/visionmedia/express) — web application framework for node
* [mysql2](https://github.com/sidorares/node-mysql2) — MySQL client for Node.js. Required for Sequelize. 
* [sequelize](https://github.com/sequelize/sequelize) — Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

## Contributing

This boilerplate is open to suggestions and contributions, documentation contributions are also welcome! 😊
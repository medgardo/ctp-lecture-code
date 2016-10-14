# Module 04 - Lecture Code


In lecture we did 1 live coding session demonstrating how to add a Postgres database and Sequelize models to our applications. The steps taken in the session are outlined below:


## 01 - Adding Sequelize and creating models for our Apps

[Sequelize]() is an ORM library for accessing relational databases through models in our node.js applications. In the instructions below, we assume a Postgres database has already been setup.

### Adding sequelize and sequelize-cli

The following steps are taken only once for each application we develop. We first add the `sequelize` and `pg` packages to our project. We install the `sequelize-cli` package globally.

```
$ npm install --save sequelize pg
$ npm install -g sequelize-cli
```

We then proceed to run the `init` command so that sequelize generates some base code and directories for our project. (Note, only one developer on the team has to do this.)

```
$ sequelize init
```

### Creating models in our project

The `sequelize-cli` tool provides us _generators_ which create template model and migration files (each model is only generated once, it does not have to be repeated by each developer). For example:

```
$ sequelize model:create --name Article --attributes title:string,slug:string,body:text
$ sequelize model:create --name Author --attributes first_name:string,last_name:string,bio:text
```


### Applying changes to our Database

Migrations are the scripts that actually change the database tables and columns. These scripts have to be run in each environment that the code is executed on. This means, that each developer should run this command, so that their local development database is up to date. This is a safe command to run multiple times.

```
$ sequelize db:migrate
```


### Using models to insert and retrieve data from the database

Look through (and use the routes) defined in the Authors controller located in:

```
controllers/authors.js
```

for an example on model usage.

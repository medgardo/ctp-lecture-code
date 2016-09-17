# Module 03 - Lecture Code


In lecture we did 3 live coding sessions. Each session's code is within directories 01, 02, and 03. Environment setup instructions, and basic commands are explained below:


## Setting up your environment

### For Windows users:

* Make sure you have Node.js 6.x installed. (I recommend version 6.5.0 or newer)
* Open the Node.js command prompt (or command prompt of your choice)
* Make or Change into the directory that you want to work in
    - _i.e._ `cd ctp`

### For Vagrant users

* Use an existing Ubuntu vagrant box or create a new one
    - Making a new Vagrant box
        1. Make or change into a directory you want to work in
        3. `cd ctp/lecture-code`
        4. `vagrant init ubuntu/trusty64`
        5. Make sure you edit line 25 and open a port (port 8000 for these lecture notes)
        6. `vagrant up`
        7. `vagrant ssh`
        8. `cd /vagrant`
        9. Install Node.js (I recommend using NVM you can follow [these instructions](https://github.com/medgardo/ctp2016/blob/master/lecture-notes/00.2_2016-07-12/nvm.md))


## 01 - Creating a new Express.js app and Basic Routing

### Starting a project

```
$ npm init 
```

This command creates a `package.json` to manage our projects dependencies and scripts.

> **NOTE:** This command does not create any javascript files for you. You should create your own `app.js` file.

You should add a _start_ task to your application. The scripts section will look like this.

```json
  ...
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
```


### Add Express.js to your project

```
$ npm install --save express
```

This command installs express to my `node_modules` directory and the `--save` option adds it to my `package.json` file as a dependency of my application.


## 02 - Nodemon and Using Controllers

### Install `nodemon` to make life easier!

```
npm install --save nodemon
```

Update your _start_ script in `package.json` to use nodemon for auto-reloading of your project code.

```json
  "scripts": {
    "start": "node_modules/.bin/nodemon -L app.js",
    ...
  }
```


### Making controllers

Just create a `controllers` directory, and add your javascript files there

In your `app.js` load in the controller with a `require(...)` call.


## 03 - Adding a Testing Framework

Install Mocha/Chai/Chai-http

```
npm install --save mocha
npm install --save chai
npm install --save chai-http
```

Create a `tests/` directory.

Save your test files to the `tests/` directory. Aim to match your test filenames and directory structure to your application filenames and directory structure.



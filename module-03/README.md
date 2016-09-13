# Module 03 - Lecture Notes

## Install Node for your OS

On Windows:
- Install the Node package from nodejs.org

On Linux:

- Use nvm:
    + Install using this guide: https://github.com/medgardo/ctp2016/blob/master/lecture-notes/00.2_2016-07-12/nvm.md

## 01 - What is Express

<!-- Go from examples 1-5, explaining http verbs, url matching, route params, query params -->

### Create your first Node project

```
npm init
```

- Answer questions.
    + Make the entry point `app.js`
- Edit package.json
- create your `app.js` file
    + Add `console.log('hello world')`
- Run application `node app.js`


### Make your first Express project

```
npm init
npm install --save express
```

- edit package.json
- create `app.js`

```javascript
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(8000);
```


## 02 - Using Controllers

<!-- how we separate code into multiple files. explain middleware for logging. This is a per-controller middleware. They can also be per-application or per-action -->

Install `nodemon` to make life easier!

```
npm install --save nodemon
```

Make a controllers folder.

Create a controller by calling `router = express.Router()`

Add your 'actions'

Export it using `modules.exports = router` 

## 03 - Writing BDD tests to design our URL/Route Space

<!-- This is an integration test, but it allows us to test our route design -->

Install Mocha/Chai/Chai-http

```
npm install --save mocha
npm install --save chai
npm install --save chai-http
```

Create a `tests/` folder

Create the first controller test.



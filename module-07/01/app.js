const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const persons = require('./controllers/persons');
const phones = require('./controllers/phones');
app.use('/api/persons', persons);
app.use('/api/phones', phones);



module.exports = app;
app.listen(8000);

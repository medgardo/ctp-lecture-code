const express = require('express');
const app = express();

// Load and mount the articles controller
const articles = require('./controllers/articles');
const authors = require('./controllers/authors');
app.use('/articles', articles);
app.use('/authors', authors);

module.exports = app;
app.listen(8000);

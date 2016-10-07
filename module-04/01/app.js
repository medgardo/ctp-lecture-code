const express = require('express');
const app = express();

// Load and mount the articles controller
const articles = require('./controllers/articles');
app.use('/articles', articles);

module.exports = app;
app.listen(8000);

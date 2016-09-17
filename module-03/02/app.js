const express = require('express');
const app = express();

// Load and mount the articles controller
const articles = require('./controllers/articles');
app.use('/articles', articles);


app.listen(8000);

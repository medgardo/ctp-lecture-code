const express = require('express');
const app = express();


const articles = require('./controllers/articles');
app.use('/articles', articles);


app.listen(8000);

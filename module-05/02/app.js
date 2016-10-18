const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

// Load and mount the articles controller
const articles = require('./controllers/articles');
const authors = require('./controllers/authors');
app.use('/articles', articles);
app.use('/authors', authors);

module.exports = app;
app.listen(8000);

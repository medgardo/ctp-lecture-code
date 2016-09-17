const express = require('express');
const app = express();

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

// Responding to an /articles route, and checking query params
app.get('/articles', function (req, res) {
  var msg = 'In articles listing page';

  if(req.query.sort_by != null) {
    msg += ' -- sorted by: ' + req.query.sort_by;
  }

  res.send(msg);
});

// Responding to a specific article page by title
app.get('/articles/:title', function (req, res) {
  res.send('Viewing article titled: ' + req.params.title);
});

app.listen(8000);

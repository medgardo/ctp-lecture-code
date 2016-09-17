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

// Responding to an /articles route
app.get('/articles', function (req, res) {
  res.send('In articles listing page.')
});

app.listen(8000);

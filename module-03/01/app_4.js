const express = require('express');
const app = express();


// Consuming route parameters
app.get('/users/:username', (req, res) => {
  res.send('The username is:' + req.params.username);
});


// GET method route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.listen(8000);

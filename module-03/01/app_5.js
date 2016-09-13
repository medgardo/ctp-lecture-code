const express = require('express');
const app = express();


// Consuming query parameters
app.get('/users/:username', (req, res) => {
  let msg = 'The username is: ' + req.params.username;
  if (req.query.test != null) {
    msg += ' -- A test query received!'
  }
  res.send(msg);
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

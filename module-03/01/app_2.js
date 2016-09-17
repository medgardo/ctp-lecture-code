const express = require('express');
const app = express();

// Hello World Example, responding to a single root route
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(8000);

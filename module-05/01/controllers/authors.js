var express = require('express');
var router = express.Router();
var models = require('../models');

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Authors Controller :: Time: ', Date.now());
  next();
});


// define the root authors route
router.get('/', function(req, res) {
  models.Author.findAll({})
    .then(function (authors) {
      if (authors != null) {
        res.send('Authors List: <br /><pre>' + JSON.stringify(authors, null, 4) + '</pre>');
      } else {
        res.send('No Authors found');
      }
    });
});

// define the specific author route
router.get('/:id', function(req, res) {
  models.Author.findById(req.params.id)
    .then(function(author) {
      if (author != null) {
        res.send('Found Author <br /><pre>' + JSON.stringify(author, null, 4) + '</pre>');
      } else {
        res.send('Did not find Author');
      }
    });
});


// VERY BAD CODE. This was only for quick demonstration purposes
// Next lecture we will look at using HTML forms and POST requests
router.get('/new/:first_name/:last_name/:bio', function (req,res) {
  models.Author.create({
    first_name: req.params.first_name,
    last_name: req.params.last_name,
    bio: req.params.bio
  }).then(function (author) {
    res.redirect('/authors')
  }).catch(function (e) {
    res.send('ERROR: creating an author');
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Articles Controller :: Access Time: ', Date.now());
  next();
});


// define the home page route
router.get('/', function(req, res) {
  res.send('Articles home page');
});

// define the about route
router.get('/:slug', function(req, res) {
  res.send('This is article: ' + req.params.slug);
});

module.exports = router;

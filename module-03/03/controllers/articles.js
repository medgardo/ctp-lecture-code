var express = require('express');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Articles Controller :: Time: ', Date.now());
  next();
});


// define the root articles route
router.get('/', function(req, res) {
  res.send('Articles home page');
});

// define the specific article route
router.get('/:title', function(req, res) {
  res.send('This is article: ' + req.params.title);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var chance = require('chance')();


router.get('/', function (req, res) {
  res.json({
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    gender: chance.gender(),
  });
})


module.exports = router;

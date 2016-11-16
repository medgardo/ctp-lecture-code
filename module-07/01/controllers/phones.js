var express = require('express');
var router = express.Router();
var chance = require('chance')();


router.get('/', function (req, res) {
  res.json({ phoneNumber: chance.phone() })
})


module.exports = router;

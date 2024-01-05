var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log('main commit 01')

  console.log('branch A ')
});

module.exports = router;

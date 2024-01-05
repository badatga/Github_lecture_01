var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log('메인 브랜치 A 머지하며 신규로 내용 작성')

});

module.exports = router;

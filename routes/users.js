var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log('브랜치 A에서 모든 내용을 다 지우고 신규로 작성')
});

module.exports = router;

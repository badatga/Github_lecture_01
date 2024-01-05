var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log('B 브랜치에서 모든 내용을 다 지우고 커밋 / 기타 작업 진행하지 않은 상태')
});

module.exports = router;

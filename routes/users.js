var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log('메인브랜치 한번 다 머지해놓고 브랜치 A B 개별적으로 작성 / 메인브랜치도 추가로 작성')
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log('메인브랜치 한번 다 머지해놓고 브랜치 A B 개별적으로 작성 / 메인브랜치도 추가로 작성')
  console.log('B 브랜치에서 모든 내용을 다 지우고 커밋 / 기타 작업 진행하지 않은 상태')

  console.log('origin/main 을 머지한 결과')
});

module.exports = router;

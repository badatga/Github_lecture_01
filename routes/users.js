var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log('main commit 01')

  console.log('branch B update 01 ')

  console.log('메인에서 브랜치B를 pull 한 경우 (rebase) 기반')
});

module.exports = router;

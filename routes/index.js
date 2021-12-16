var express = require('express');
var router = express.Router();

function someFucntion(){
  return "hello world";
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(someFucntion())
});

module.exports = router;

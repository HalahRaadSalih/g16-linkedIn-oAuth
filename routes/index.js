var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.user = req.user || "";
  console.log(res.locals);
  res.render('index', {
    title: 'Express yyy',
    user: res.locals.user});
});

module.exports = router;

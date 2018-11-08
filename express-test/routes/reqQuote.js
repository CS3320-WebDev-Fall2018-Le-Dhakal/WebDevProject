var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reqQuote', { title: 'Request Quote' });
});

module.exports = router;

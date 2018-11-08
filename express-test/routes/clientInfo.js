var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('clientInfo', { title: 'Client Information' });
});

module.exports = router;

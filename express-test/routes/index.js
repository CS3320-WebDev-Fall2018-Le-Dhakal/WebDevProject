var express = require('express');
var router = express.Router();

var quote_controller = require('../controllers/quoteController');
var client_controller = require('../controllers/clientController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get list of quote history
router.get('/quoteHist', quote_controller.quote_list);

// router.get('/quoteHist', function(req, res, next) {
//   res.render('quoteHist', { title: 'Quote History' });
// });

router.get('/reqQuote', function(req, res, next) {
  res.render('reqQuote', { title: 'Request Quote' });
});

//Get client information
router.get('/clientInfo', client_controller.client_detail);


// router.get('/clientInfo', function(req, res, next) {
//   res.render('clientInfo', { title: 'Client Information' });
// });

module.exports = router;

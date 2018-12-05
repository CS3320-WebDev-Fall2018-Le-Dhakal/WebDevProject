var express = require('express');
var router = express.Router();

var quote_controller = require('../controllers/quoteController');
var client_controller = require('../controllers/clientController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fuel Prediction' });
});

//Get list of quote history
router.get('/quoteHist', quote_controller.quote_list);

router.get('/reqQuote', function(req, res, next) {
  res.render('reqQuote', { title: 'Request Quote' });
});

//Pull client information
router.get('/clientInfo', client_controller.client_detail);

module.exports = router;

var Quote = require('../models/quote');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        quote_count: function(callback) {
            Quote.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        }
    }, function(err, results) {
        res.render('Quote', { title: 'Quote History', error: err, data: results });
    });
};

exports.quote_list = function(req, res, next) {

  Quote.find({}, 'requestDate deliveryDate gallonsRequested totalAmountDue')
    .exec(function (err, list_quotes) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('quoteHist', { title: 'Quote History', quote_list: list_quotes });
    });
    
};
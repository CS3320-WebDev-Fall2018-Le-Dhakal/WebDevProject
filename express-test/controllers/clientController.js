var ClientInfo = require('../models/clientInfo');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        client_count: function(callback) {
            ClientInfo.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        }
    }, function(err, results) {
        res.render('clientInfo', { title: 'Client Information', error: err, data: results });
    });
};
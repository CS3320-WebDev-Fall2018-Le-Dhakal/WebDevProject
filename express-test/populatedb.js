#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Client = require('./models/clientInfo')
var Quote = require('./models/quote')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var clientIds = []
var quotes = []

console.log('Connected to database.');


function clientCreate(full_name, address, city, state, zip_code, phone, email, cb) {
  clientdetail = {full_name:full_name, address:address, city:city, state: state, zip_code: zip_code, phone: phone, email:email}

  var client = new Client(clientdetail);

  client.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Client: ' + client);
    clientIds.push(client)
    cb(null, client)
  }  );
}

function quoteCreate(client, gallonsRequested, requestDate, deliveryDate, deliveryAddress, deliveryCity, deliveryState, deliveryZipCode, deliveryContactName,
  deliveryContactPhone, deliveryContactEmail, suggestedPrice, totalAmountDue, cb) {
  quotedetail = {
    client:client, 
    gallonsRequested:gallonsRequested, 
    requestDate:requestDate, 
    deliveryDate:DeliveryDate, 
    deliveryAddress:deliveryAddress, 
    deliveryCity:deliveryCity, 
    deliveryState:deliveryState, 
    deliveryZipCode:deliveryZipCode, 
    deliveryContactName:deliveryContactName,
    deliveryContactPhone:deliveryContactPhone, 
    deliveryContactEmail:deliveryContactEmail, 
    suggestedPrice:suggestedPrice, 
    totalAmountDue:totalAmountDue
  }

  var quote = new Quote(quotedetail);

  quote.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Quote: ' + quote);
    quotes.push(quote)
    cb(null, quote)
  }  );

}

function createClient(cb) {
    async.parallel([
        function(callback) {
          clientCreate('Raj Singh', '123 Main Street', 'Austin', 'TX', 78701, 2101234567, 'testemail@test.com', callback);
        }
        ],
        // optional callback
        cb);
}

function createQuote(cb) {
    async.parallel([
        function(callback) {
          quoteCreate(1000, 2018-10-20, 2018-10-30, '123 Main Street', 'Austin', 'TX', 78701, 'Raj Singh', 2101234567, 'testemail@test.com', 2.59, 2590.0, callback);
        }
        ],
        // Optional callback
        cb);
}


async.series([
    createClient,
    createQuote
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Clients: ' + clients);
        console.log('Quote: ' + quotes)
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});





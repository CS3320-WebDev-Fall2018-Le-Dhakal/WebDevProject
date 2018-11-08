var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema(
  {
    full_name: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    city: {type: String, max: 100},
    state: {type: String, max: 2},
    zip_code: {type: Number, max: 5},
    phone: {type: Number, max: 10},
    email: {type: String, max: 100}
  }
);

//Export model
module.exports = mongoose.model('clientInfo', clientSchema);
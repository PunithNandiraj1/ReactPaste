const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  file_name: {
    type: String
  },
  input_string: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
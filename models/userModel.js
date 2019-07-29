const mongoose = require('mongoose');

const { Schema } = mongoose;

const demoModel = new Schema(
  {
    name: {type:String},
    ssn: {type:String},
    duty: {type:String},
    start: {type:String},
    end: {type:String},
    intern: {type:Boolean, default: false},
    intern_ssn: {type:String},
    location: {type:String},
    timestamp: {type:String}
  }
);

module.exports = mongoose.model('Demo', demoModel);

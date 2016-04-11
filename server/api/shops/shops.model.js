'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ShopsSchema = new mongoose.Schema({
  title: String,
  location: String,
  mcard: {
  	type:Array,
  	required:true
  },
  special: {
  	type:Array,
  	required:false
  },
  tagline:String
});

export default mongoose.model('Shops', ShopsSchema);

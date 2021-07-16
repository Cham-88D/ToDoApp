const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
  
},{timestamps:true});

//Export the model
module.exports = mongoose.model('item', itemSchema);
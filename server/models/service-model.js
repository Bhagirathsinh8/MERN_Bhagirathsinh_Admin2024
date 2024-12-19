const mongoose = require('mongoose');

const serviceScema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    provider:{
        type:String,
        required:true
    }
});


const Service = mongoose.model('Service',serviceScema);

module.exports = Service;
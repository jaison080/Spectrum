const mongoose = require('mongoose')

const CompSchema = new mongoose.Schema({
    name: {type:String,required: true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required: true},
    companyType:{type:String}
})

module.exports = mongoose.model('Company',CompSchema);
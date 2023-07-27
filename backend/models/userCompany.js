const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    name: {type:String,required: true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required: true},
    companyType:{type:String},
    location:{type :String},
    website:{type: String},
    description: {type : String},
    isApproved:{type: Boolean, default:false}
})

module.exports = mongoose.model('Company',CompanySchema);
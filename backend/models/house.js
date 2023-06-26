const mongoose = require('mongoose');
const HouseSchema = new mongoose.Schema({
    image: [{type : String}],
    rent: {type : Number},
    type: {type : String},
    rooms: {type: Number},
    bathrooms: {type: Number},
    isTerrace: {type: Boolean},
    squareFeet: {type: Number},
    misc:{type: String},
    contact:{type: String},  
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    address: {type: String},
    lastModified: {type: Date},
    coords:[{type : String}],
    isReported: {type: Boolean, default:false}  
})

module.exports = mongoose.model('House',HouseSchema);
const mongoose = require('mongoose');

const  JobsSchema =  new mongoose.Schema({
    title: {type: String, required: true },
    jobDesc: {type: String, required: true},
    location: {type: String, required: true},
    jobType: {type: String, required:true},
    prerequisite: [{type: String, required: true }],
    responsibility: [{type: String, required: true}],
    misc: {type: String, required: true},
    dateOfPosting: {type: Date, default: Date.now},
    url: {type: String, required: true},
    postedBy: {type :mongoose.Schema.Types.ObjectId, ref: 'Company', required:true},
    isReported: {type :Boolean, default:false}
});

module.exports = mongoose.model('Jobs',JobsSchema);
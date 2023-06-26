const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    image: { type: String },
    tags: { type: [String] },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User',default: [] }],
    comments: [{
        commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }],
    isReported:{type: Boolean, default:false}
})

module.exports = mongoose.model('Blog', BlogSchema);
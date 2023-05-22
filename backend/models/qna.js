const mongoose = require('mongoose');
const QnASchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
		isAnonymous: {type: Boolean, default: false},
    topics: { type: [String] },
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    answers: [{
        answerer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        comments: [{
            commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }]
    }]
})

module.exports = mongoose.model('QnA', QnASchema);
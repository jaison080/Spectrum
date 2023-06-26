const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    isAnonymous: { type: Boolean, default: false },
    topics: { type: [String] },
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
    isReported: {type: Boolean, default:false}
  });
  
  module.exports = mongoose.model("Question", QuestionSchema);
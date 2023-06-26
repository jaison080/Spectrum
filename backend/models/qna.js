// const mongoose = require("mongoose");
// const AnswerSchema = new mongoose.Schema({
//   question: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Question",
//     required: true,
//   },
//   answerer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   content: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//   dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//   comments: [
//     {
//       commenter: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//       },
//       content: { type: String, required: true },
//       createdAt: { type: Date, default: Date.now },
//     },
//   ],
//   isReported: {type:Boolean, default:false}
// });

// const QuestionSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   createdAt: { type: Date, default: Date.now },
//   isAnonymous: { type: Boolean, default: false },
//   topics: { type: [String] },
//   dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//   likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//   answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
// });

// const Question = mongoose.model("Question", QuestionSchema);
// const Answer = mongoose.model("Answer", AnswerSchema);

// module.exports = { Question, Answer };

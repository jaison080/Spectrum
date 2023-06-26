//return all the questions asked by a user
const Question = require("../../models/questions");
const getAllQuestionsByUser = async (req, res) => {
  try {
    const questions = await Question.find({ author: req.user.user_id })
    .populate({
      path: "answers",
      populate: [
        {path: "answerer"},
        {path: "comments.commenter"}
      ],
    })
    .populate("author");
    res.status(200).send(questions);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
module.exports = { getAllQuestionsByUser };

const Question = require("../../models/questions");
const getAllUnansweredQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ answers: { $size: 0 } })
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

module.exports = { getAllUnansweredQuestions };

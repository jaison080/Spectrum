//api to get all question and return them
const Question = require("../../models/questions");
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
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

module.exports = { getAllQuestions };

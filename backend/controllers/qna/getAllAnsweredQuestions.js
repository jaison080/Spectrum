const { Question } = require("../../models/qna");
const getAllAnsweredQuestions = async (req, res) => {
  try {
    const questions = await Question.find({
      answers: { $exists: true, $ne: [] },
    }).populate({
        path: "answers",
        populate: {
          path: "answerer",
        },
      })
      .populate("author");
    res.status(200).send(questions);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { getAllAnsweredQuestions };

const Question = require("../../models/questions");
const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id)
    .populate({
      path: "answers",
      populate: [
        {path: "answerer"},
        {path: "comments.commenter"}
      ],
    })
    .populate("author");
    res.status(200).send(question);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { getQuestionById };

const {Question, Answer} = require("../../models/qna");
const deleteQuestion = async (req, res) => {
  try {
    const question_id = req.params.id;
    const question = await Question.findOneAndDelete({ _id: question_id });
    await Answer.deleteMany({ question: question_id });
    res.status(200).send(question);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { deleteQuestion };

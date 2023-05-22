const QnA = require("../../models/qna");
const deleteQuestion = async (req, res) => {
  try {
    const question_id = req.params.d;
    const question = await QnA.findOneAndDelete({ _id: question_id });
    res.status(200).send(question);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { deleteQuestion };

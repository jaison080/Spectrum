const QnA = require("../../models/qna");
const getAllAnswersByUser = async (req, res) => {
  try {
    const answers = await QnA.find({
      answers: { $exists: true, $ne: [] },
      "answers.answerer": req.user.user_id,
    });
    res.status(200).send(answers);
  } catch (err) {
    console.log(err); 
    res.status(500).send(err)
  }
};

module.exports = { getAllAnswersByUser };
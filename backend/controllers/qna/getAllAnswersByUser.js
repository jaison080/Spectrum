const Answer = require("../../models/answers");
const getAllAnswersByUser = async (req, res) => {
  try {
    const answers = await Answer.find({ answerer: req.user.user_id}).populate('question').populate('answerer').populate('comments.commenter');
    res.status(200).send(answers);
  } catch (err) {
    console.log(err); 
    res.status(500).send(err)
  }
};

module.exports = { getAllAnswersByUser };
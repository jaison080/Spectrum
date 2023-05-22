//api to get all question and return them
const QnA = require("../../models/qna");
const getAllQuestions = async (req, res) => {
  try {
    const questions = await QnA.find();
    res.status(200).send(questions);
  } catch (err) {
    console.log(err); 
    res.status(500).send(err)
  }
};

module.exports = { getAllQuestions };

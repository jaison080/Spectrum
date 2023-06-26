const Question = require("../../models/questions");
const Answer = require("../../models/answers");

const deleteQuestion = async (req, res) => {
  try {
    const question_id = req.params.id;
    const questionDetails = await Question.findById(question_id);
    //check if the user is the author of the question
    if (questionDetails.author.toString() !== req.user.user_id) {
      return res.status(401).send("You are not authorized to delete this question");
    }
    const question = await Question.findOneAndDelete({ _id: question_id });
    await Answer.deleteMany({ question: question_id });
    res.status(200).send(question);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { deleteQuestion };

const Answer= require("../../models/answers");
const Question= require("../../models/questions");

const deleteAnswer = async (req, res) => {
  try {
    const answerId = req.params.id;
    const answer = await Answer.findById(answerId);
    const questionId = answer.question;
    if(!answer){
        return res.status(404).json({ message: "Answer not found" });
    }
    await Answer.findByIdAndDelete(answerId);

    await Question.findByIdAndUpdate(questionId, {
      $pull: { answers: answerId },
    });

    res.status(200).json({ message: "Answer deleted successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the answer" });
  }
};
module.exports = { deleteAnswer };
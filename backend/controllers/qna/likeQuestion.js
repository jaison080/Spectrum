const Question = require("../../models/questions");
const likeQuestion = async (req, res) => {
  const questionId = req.params.questionId;
  const user = req.user.user_id;
  try {
    // Find the question by its ID and update the 'likes' array with the user ID
    const question = await Question.findById(questionId);
    console.log(question);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Check if the user has already disliked the question
    const hasDisliked = question.dislikes.includes(user);

    if (hasDisliked) {
      // Remove the user ID from the 'dislikes' array
      question.dislikes = question.dislikes.filter((questionId) => questionId.toString() !== user);
    }

    const hasLiked = question.likes.includes(user);

    if (hasLiked) {
      question.likes = question.likes.filter((questionId) => questionId.toString() !== user);
    }
    else{
      question.likes.push(user);
    }
    await question.save();
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { likeQuestion };

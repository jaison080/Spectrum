const Question = require("../../models/questions");
const dislikeQuestion = async (req, res) => {
  const questionId = req.params.questionId;
  const user = req.user.user_id;

  try {
    // Find the question by its ID
    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Check if the user has already liked the question
    const hasLiked = question.likes.includes(user);

    if (hasLiked) {
      // Remove the user ID from the 'likes' array
      question.likes = question.likes.filter((id) => id.toString() !== user);
    }

    // Check if the user has already disliked the question
    const hasDisliked = question.dislikes.includes(user);

    if (hasDisliked) {
      question.dislikes = question.dislikes.filter(
        (id) => id.toString() !== user
      );
    } else {
      question.dislikes.push(user);
    }
    await question.save();

    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { dislikeQuestion };

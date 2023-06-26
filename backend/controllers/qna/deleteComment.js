const Answer = require('../../models/answers');

const deleteComment = async (req, res) => {
    try {
        const answerId = req.params.answerId;
        const commentId = req.params.commentId;

        const answer = await Answer.findByIdAndUpdate(
          answerId,
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
    
        res.status(200).json(answer);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred while deleting the comment" });
      }
}

module.exports = { deleteComment }